import { Component } from '@angular/core';
import { AppState } from './app.model';

@Component({
  selector: 'app-container',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.scss']
})
export class AppContainer {
  state: AppState;

  constructor() {
    this.state = {
      view: 'HOME'
    };
  }

  setView(view: string) {
    this.state = {
      ...this.state,
      view: view
    };
  }
}
