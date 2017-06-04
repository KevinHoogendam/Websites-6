import { Component, OnInit } from '@angular/core';

import { Game } from '../game';

import { GameService } from '../game.service';
import { EmitterService } from '../../emitter.service';


@Component({
  selector: 'new-game',
  templateUrl: './new-game.html',
  styleUrls: ['../../app.component.css'],
  providers: [GameService]
})
export class NewGameComponent {
  model = new Game('Shanghai', 2, 32);
  templates = ['Dragon', 'Monkey',
            'Rooster', 'Snake', 'Ram', 'Shanghai'];
  
  constructor(private gameService: GameService) { }
  
  createGame(): void
  {
    console.log('test');
    return;
    //console.log("create");
    //this.gameService.createGame(this.username, this.templateName, this.minPlayers, this.maxPlayers)
  }
  onSubmit() { this.createGame(); }
}
