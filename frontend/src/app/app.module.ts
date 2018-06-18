import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetRequestComponent } from './components/password/reset-request/reset-request.component';
import { ResetResponseComponent } from './components/password/reset-response/reset-response.component';
import { AppRoutingModule } from './/app-routing.module';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [ AppComponent, NavbarComponent, LoginComponent, RegisterComponent, ProfileComponent, ResetRequestComponent, ResetResponseComponent ],
  imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, SnotifyModule ],
  providers: [ { provide: 'SnotifyToastConfig', useValue: ToastDefaults}, SnotifyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
