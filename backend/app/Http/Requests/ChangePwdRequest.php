<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class ChangePwdRequest extends FormRequest
{
  // Determine if the user is authorized to make this request.
  public function authorize()
  {
    return true;
  }

  // Get the validation rules that apply to the request.
  public function rules()
  {
    return [
      'email' => 'required|email',
      'password' => 'required|confirmed'
    ];
  }
}
