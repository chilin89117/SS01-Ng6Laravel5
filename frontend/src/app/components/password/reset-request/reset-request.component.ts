import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { SnotifyService } from 'ng-snotify';


@Component({
  selector: 'app-reset-request',
  templateUrl: './reset-request.component.html'
})
export class ResetRequestComponent implements OnInit {
  public form = {
    email: null
  };  

  constructor(
    private http:HttpService, 
    private snotify:SnotifyService) { }
  ngOnInit() { }

  onSubmit() {
    this.snotify.info('Please wait...', 'Sending Email', {timeout:2000});
    this.http.sendPwdResetLink(this.form)
             .subscribe(
               data => this.handleResponse(data),
               error => this.snotify.error(error.error.error)
             )
  }

  handleResponse(response) {
    this.snotify.success(response.data, {timeout:2000});
    this.form.email = null;
  }
}
