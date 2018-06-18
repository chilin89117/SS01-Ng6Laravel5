<?php
namespace App;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
  use Notifiable;

  // The attributes that are mass assignable.
  protected $fillable = ['name', 'email', 'password'];

  // The attributes that should be hidden for arrays.
  protected $hidden = ['password', 'remember_token'];

  // Get the identifier that will be stored in the subject claim of the JWT.
  public function getJWTIdentifier()
  {
    return $this->getKey();
  }

  // Return a key value array, containing any custom claims to be added to the JWT.
  public function getJWTCustomClaims()
  {
    return [];
  }

  public function setPasswordAttribute($value)
  {
    return $this->attributes['password'] = bcrypt($value);
  }
}