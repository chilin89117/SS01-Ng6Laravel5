import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private token:TokenService) { }

  private loggedIn = new BehaviorSubject<boolean>(this.token.isTokenValid());
  public authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value:boolean) {
    this.loggedIn.next(value);
  }
}
