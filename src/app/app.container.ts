import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TicketsActions } from './modules/tickets';

@Component({
  selector: 'app-container',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.scss']
})
export class AppContainer {
  state: any;

  constructor(private store: Store<any>) {
    this.state = {
      view: 'HOME'
    };
  }

  setView(view: string) {
    const mapper = {
      'HOME': () => {
        this.state = {
          ...this.state,
          view: 'HOME'
        };
      },
      'LIST_TICKETS': () => {
        this.state = {
          ...this.state,
          view: 'LIST_TICKETS'
        };

        this.store.dispatch(new TicketsActions.SetView('LIST_TICKETS'));
      },
      'ADD_TICKET': () => {
        this.state = {
          ...this.state,
          view: 'ADD_TICKET'
        };

        this.store.dispatch(new TicketsActions.SetView('ADD_TICKET'));
      }
    }

    mapper[view]();
  }
}
