<?php
Route::group([
  'middleware' => 'api'
], function ($router) {
  Route::post('register', 'AuthController@register');
  Route::post('login', 'AuthController@login');
  Route::post('logout', 'AuthController@logout');
  Route::post('refresh', 'AuthController@refresh');
  Route::post('me', 'AuthController@me');
  Route::post('send-reset-link', 'ResetPwdController@sendEmail');
  Route::post('change-pwd', 'ResetPwdController@changePwd');
});
