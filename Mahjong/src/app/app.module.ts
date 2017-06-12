import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { CoreModule } from './core/core.module';
import { GameModule } from './game/game.module';
import { ProfileModule } from './profile/profile.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    GameModule,
    ProfileModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
