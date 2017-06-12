import { Component, OnInit } from '@angular/core';

import { Game } from '../game';

import { GameService } from '../game.service';
import { EmitterService } from '../../emitter.service';


@Component({
  selector: 'my-games',
  templateUrl: './games.html',
  styleUrls: ['../../app.component.css'],
  providers: [GameService]
})
export class GamesComponent {
  title = 'Mahjong Games';
  games: Game[];
  selectedGame: Game;
  detailShow;

  constructor(private gameService: GameService) { }

  getGames(): void{
      this.gameService.getGames().subscribe(games => this.games = games, err =>{console.log(err)});
  }

  ngOnInit(): void {
      this.getGames();
  }


  onSelect(game: Game): void {
    if(this.selectedGame === game){
      this.selectedGame = undefined;
    }else{
      this.selectedGame = game;
    }
  }}
