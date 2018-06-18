import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public errors = null;
  public form = {
    email: null,
    password: null
  };

  constructor(
    private http:HttpService, 
    private token:TokenService,
    private router:Router,
    private auth:AuthService) { }
  ngOnInit() { }

  onSubmit() {
    this.http.login(this.form)
             .subscribe(data => this.handleRespsone(data),
                        error => this.handleError(error));
  }

  handleRespsone(data) {
    this.token.saveTokenLocal(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.errors = error.error.error;
  }
}
