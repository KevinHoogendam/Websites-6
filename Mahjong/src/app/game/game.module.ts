import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesComponent }     from './games/games.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameService }     from './game.service';


const gameRoutes: Routes = [
  { path: 'games/list',  component: GamesComponent },
  { path: 'games/new',  component: NewGameComponent }
];

export const gameRouting = RouterModule.forChild(gameRoutes);

@NgModule({
  declarations: [
    GamesComponent,
    GameDetailComponent,
    NewGameComponent
  ],
  exports: [
    GamesComponent,
    GameDetailComponent,
    NewGameComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      HttpModule,
      gameRouting
  ],
  providers: [GameService]
})
export class GameModule { }
