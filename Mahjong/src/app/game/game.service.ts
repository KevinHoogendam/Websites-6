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
        let headers = new Headers({ 'Content-Type': 'application/json', 'x-username': username, "x-token": token });
        let options = new RequestOptions({ headers: headers });
        let newGame = {
                        templateName: template,
                        minPlayers: min,
                        maxPlayers: max
                      };
        console.log('start');
        return this.http.post('http://mahjongmayhem.herokuapp.com/games', JSON.stringify(newGame), options)
                         .map(this.extractData)
                         .catch(this.handleError);
    }

    private extractData(res: Response) {
        console.log('success');
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: Response | any) {
        console.log('fail');
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}