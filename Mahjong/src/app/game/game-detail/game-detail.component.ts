import { Component, Input } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.html',
})
export class GameDetailComponent {
  @Input() game: Game;
}
