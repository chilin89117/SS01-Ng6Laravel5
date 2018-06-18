import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../services/http.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-reset-response',
  templateUrl: './reset-response.component.html'
})
export class ResetResponseComponent implements OnInit {
  public errors = [];
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }

  constructor(
    private route:ActivatedRoute,
    private http:HttpService,
    private router:Router,
    private snotify:SnotifyService) {
    route.queryParams.subscribe(params => this.form.resetToken = params['token']);
  }
  ngOnInit() { }

  onSubmit() {
    this.http.changePwd(this.form)
             .subscribe(
               data => this.handleResponse(data),
               error => this.handleError(error)
             );
  }

  handleResponse(data) {
    let _router = this.router;
    this.snotify.confirm('Login with new password.', 'Reset Complete!', {
      buttons: [
        {text: 'OK', action: toast => {
          _router.navigateByUrl('/login');
          this.snotify.remove(toast.id);
        }}
      ]
    });
  }

  handleError(error) {
    this.errors = error.error.errors;
  }
}
