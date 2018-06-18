import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetRequestComponent } from './components/password/reset-request/reset-request.component';
import { ResetResponseComponent } from './components/password/reset-response/reset-response.component';
import { NotloggedinService } from './services/notloggedin.service';
import { LoggedinService } from './services/loggedin.service';

const appRoutes:Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NotloggedinService] },
  { path: 'register', component: RegisterComponent, canActivate: [NotloggedinService] },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedinService] },
  { path: 'req-pwd-reset', component: ResetRequestComponent, canActivate: [NotloggedinService] },
  { path: 'res-pwd-reset', component: ResetResponseComponent, canActivate: [NotloggedinService] }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  declarations: [],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
