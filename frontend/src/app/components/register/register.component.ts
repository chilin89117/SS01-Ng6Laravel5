import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  public errors = [];
  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };

  constructor(
    private http:HttpService, 
    private token:TokenService,
    private router:Router) { }
  ngOnInit() { }

  onSubmit() {
    this.http.register(this.form)
             .subscribe(data => this.handleRespsone(data),
                        error => this.handleError(error));
  }

  handleRespsone(data) {
    // this.token.saveTokenLocal(data.access_token);
    this.router.navigateByUrl('/login');
  }

  handleError(error) {
    this.errors = error.error.errors;
  }
}
