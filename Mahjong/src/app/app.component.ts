import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-games></my-games>
  `
})
export class AppComponent {
  title = 'Mahjong Games';
}