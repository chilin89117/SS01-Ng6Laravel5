<?php
namespace App\Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ResetPwdMail extends Mailable
{
  use Queueable, SerializesModels;

  public $token;

  // Create a new message instance.
  public function __construct($token)
  {
    $this->token = $token;
  }

  // Build the message.
  public function build()
  {
    return $this->markdown('email.pwdReset')->with(['token' => $this->token]);
  }
}
