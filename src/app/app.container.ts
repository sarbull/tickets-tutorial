import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.scss']
})
export class AppContainer {
  state: any;

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
