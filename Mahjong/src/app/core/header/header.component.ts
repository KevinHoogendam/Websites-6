import { Component } from '@angular/core';
import { User } from '../../profile/user'

@Component({
  selector: 'core-header',
  templateUrl: './header.html',
})
export class HeaderComponent {
  user: User = JSON.parse(localStorage.getItem('user'));
 }