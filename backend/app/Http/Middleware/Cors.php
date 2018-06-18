<?php
namespace App\Http\Middleware;
use Closure;

class Cors
{
  // Handle an incoming request.
  public function handle($request, Closure $next)
  {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Authorization, Origin');
    return $next($request);
  }
}
