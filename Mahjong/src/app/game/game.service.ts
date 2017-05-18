import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { Game } from './game';
import { GAMES } from './mock-games';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImFnLmJsb21Ac3R1ZGVudC5hdmFucy5ubCI.FU1bAOLS_nvSrvYG8v9yLh8yUv6EOHl85hKWSsPZEgU';

@Injectable()
export class GameService {
    constructor(private http: Http) { }
    
    getGames(): Observable<Game[]> {
         return this.http.get('http://mahjongmayhem.herokuapp.com/games?pageSize=10')
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    createGame(username: string, template: string, min: Number, max: Number): Observable<Game> {
        let headers = new Headers({ "Content-Type": 'application/json' });
        headers.append("x-username", username);
        headers.append("x-token", token);
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify({
            templateName: template,
            minPlayers: min,
            maxPlayers: max
        });
         return this.http.post('http://mahjongmayhem.herokuapp.com/games', body, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}