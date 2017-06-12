import { Routes } from '@angular/router';

export const AppRoutes = [
  {
    path: 'games',
    loadChildren: './game/game.module#GameModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  }
  ];