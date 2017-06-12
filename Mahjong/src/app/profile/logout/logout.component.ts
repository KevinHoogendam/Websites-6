import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.html',
  styleUrls: ['../../app.component.css'],
  providers: [ProfileService]
})
export class LogoutComponent{

  constructor(private profileService: ProfileService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      localStorage.removeItem('user');
  }
}