import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { RouterModule }   from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'heroes',
      component: HeroComponent
    },
    {
      path: 'detail/:id',
      component: HeroDetailComponent
    }
  ])
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
