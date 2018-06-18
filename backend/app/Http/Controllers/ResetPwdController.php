<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use App\User;
use App\Mail\ResetPwdMail;
use App\Http\Requests\ChangePwdRequest;

class ResetPwdController extends Controller
{
  public function sendEmail(Request $request)
  {
    if(!$this->validateEmail($request->email)) {
      return response()->json(['error' => 'Email not found in database!'], Response::HTTP_NOT_FOUND);
    }
    $this->send($request->email);
    return response()->json(['data' => 'Reset email has been sent.'], Response::HTTP_OK);
  }

  public function validateEmail($email)
  {
    return !!User::where('email', $email)->first();
  }

  public function send($email)
  {
    $token = $this->getToken($email);
    Mail::to($email)->send(new ResetPwdMail($token));
  }

  public function getToken($email)
  {
    // Check if token exists from previous pwd reset attempt.
    $old_entry = DB::table('password_resets')->where('email', $email)->first();
    if(is_null($old_entry)) {
      $token = str_random(60);
      DB::table('password_resets')->insert(
        ['email' => $email, 'token' => $token, 'created_at' => Carbon::now()]
      );
    } else {
      $token = $old_entry->token;
    }
    return $token;
  }

  public function changePwd(ChangePwdRequest $request)
  {
    $user_found = DB::table('password_resets')->where([
      'email' => $request->email,
      'token' => $request->resetToken
    ]);

    if($user_found->count() == 0) {
      return $this->rejectPwdReset();
    } else {
      $user_found->delete();
      return $this->resetPwd($request);
    }
  }

  private function rejectPwdReset()
  {
    return response()->json(['error' => 'Email or token is invalid.'], Response::HTTP_UNPROCESSABLE_ENTITY);
  }

  private function resetPwd($request)
  {
    $user = User::whereEmail($request->email)->first();
    $user->update(['password' => $request->password]);
    return response()->json(['data' => 'Password successfully reset'], Response::HTTP_CREATED);
  }
}
