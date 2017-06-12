import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { User } from './user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImFnLmJsb21Ac3R1ZGVudC5hdmFucy5ubCI.FU1bAOLS_nvSrvYG8v9yLh8yUv6EOHl85hKWSsPZEgU';

@Injectable()
export class ProfileService {
    constructor(private http: Http) { }

    login(username: string, token: string) {
        let user: User = {
            username: username,
            token: token
        }
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }
}