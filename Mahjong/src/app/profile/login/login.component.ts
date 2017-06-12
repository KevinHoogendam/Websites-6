import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['../../app.component.css'],
  providers: [ProfileService]
})
export class LoginComponent{

  constructor(private profileService: ProfileService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let username = params['username'];
      let token = params['token'];
      let user = this.profileService.login(username, token);
    });
  }
}