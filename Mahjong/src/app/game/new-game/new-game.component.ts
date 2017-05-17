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
  title = 'Mahjong Games';
}
