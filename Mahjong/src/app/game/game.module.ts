import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesComponent }     from './games/games.component';
import { GameService }     from './game.service';

const gameRoutes: Routes = [
  { path: 'games/list',  component: GamesComponent }
];

export const gameRouting = RouterModule.forChild(gameRoutes);

@NgModule({
  declarations: [
    GamesComponent,
    GameDetailComponent
  ],
  exports: [
    GamesComponent,
    GameDetailComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      gameRouting
  ],
  providers: [GameService],
})
export class GameModule { }
