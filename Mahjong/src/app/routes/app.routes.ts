import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'games',
    loadChildren: '../game/game.module#GameModule'
  }];