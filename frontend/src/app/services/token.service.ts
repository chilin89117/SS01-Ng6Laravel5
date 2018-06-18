import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }

  private validIss = [
    'http://localhost:8000/api/login', 
    'http://localhost:8000/api/register'
  ];

  saveTokenLocal(token) {
    localStorage.setItem('token', token);
  }

  getTokenLocal() {
    return localStorage.getItem('token');
  }

  removeTokenLocal() {
    localStorage.removeItem('token');
  }

  isTokenValid() {
    const token = this.getTokenLocal();
    if(token) {
      const payloadIss = this.getDecodedJwtPayload(token).iss;
      if(this.validIss.indexOf(payloadIss) > -1) return true;
    }
    return false;
  }

  getDecodedJwtPayload(token) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }
}
