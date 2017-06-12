import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProfileService } from './profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.html',
  styleUrls: ['../app.component.css'],
  providers: []
})
export class ProfileComponent {
  
  constructor(private profileService: ProfileService) { }

}