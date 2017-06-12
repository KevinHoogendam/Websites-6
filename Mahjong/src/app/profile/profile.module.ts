import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { ProfileService }     from './profile.service';


const profileRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/login',  component: LoginComponent },
  { path: 'profile/logout',  component: LogoutComponent }
];

export const profileRouting = RouterModule.forChild(profileRoutes);

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    LogoutComponent
  ],
  exports: [
    ProfileComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      HttpModule,
      profileRouting
  ],
  providers: [ProfileService]
})
export class ProfileModule { }
