import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  templates = ['Shanghai', 'Dragon', 'Monkey',
            'Rooster', 'Snake', 'Ram'];
  model = new Game('Shanghai', 2, 32);
  
  constructor(private gameService: GameService) { }
  
  createGame(): void
  {
    let game = {
                  'templateName': this.model.gameTemplate.id,
                  'minPlayers': this.model.minPlayers,
                  'maxPlayers': this.model.maxPlayers
              };
    console.log(game);
    //this.gameService.createGame(game);
  }
}