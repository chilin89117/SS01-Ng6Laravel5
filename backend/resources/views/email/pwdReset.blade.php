@component('mail::message')
# SS01-Ng6Laravel5 Password Reset

Click on button below to reset your password.

@component('mail::button', ['url' => 'http://localhost:4200/res-pwd-reset?token='.$token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
