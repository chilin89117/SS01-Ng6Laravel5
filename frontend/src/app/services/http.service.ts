import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8000/api';

  register(data) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  sendPwdResetLink(data) {
    return this.http.post(`${this.baseUrl}/send-reset-link`, data);
  }

  changePwd(data) {
    return this.http.post(`${this.baseUrl}/change-pwd`, data);
  }
}
