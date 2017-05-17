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
  username: 'ag.blom@student.avans.nl';
  templateName: "Shanghai";
  minPlayers: 2;
  maxPlayers: 32;

  constructor(private gameService: GameService) { }

  createGame(): void
  {
    this.gameService.createGame(this.username, this.templateName, this.minPlayers, this.maxPlayers)
  }
}
