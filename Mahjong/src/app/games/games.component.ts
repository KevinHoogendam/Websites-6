import { Component } from '@angular/core';

import { Game } from './game';

import { GameService } from './games.service';

@Component({
  selector: 'my-games',
  templateUrl: './games.html',
  styleUrls: ['../app.component.css'],
  providers: [GameService]
})
export class GamesComponent {
  title = 'Mahjong Games';
  games: Game[];
  selectedGame: Game;

  constructor(private gameService: GameService) { }

  getGames(): void{
      this.gameService.getGames().then(games => this.games = games);
  }

  ngOnInit(): void {
      this.getGames();
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }}
