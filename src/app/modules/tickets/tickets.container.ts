import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TicketsState } from './tickets.model';
import * as TicketActions from './tickets.actions';
import { Ticket } from './tickets.model';

@Component({
  selector: 'app-tickets-container',
  templateUrl: './tickets.container.html',
  styleUrls: ['./tickets.container.scss']
})
export class TicketsContainer {
  state: TicketsState;

  constructor(private store: Store<TicketsState>) {
  }

  ngOnInit() {
    this.store.select('tickets').subscribe((data: TicketsState) => {
      this.state = data;
    })
  }

  createTicket(ticket: Ticket) {
    this.store.dispatch(new TicketActions.Add(ticket));
  }
}
