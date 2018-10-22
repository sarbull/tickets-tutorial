import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { TicketsState } from './tickets.model';
import * as TicketActions from './tickets.actions';
import { Ticket } from './tickets.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tickets-container',
  templateUrl: './tickets.container.html',
  styleUrls: ['./tickets.container.scss']
})
export class TicketsContainer {
  tickets$: Observable<TicketsState> = this.store.select('ticketsModule').pipe(map(data => data.tickets));

  constructor(private store: Store<TicketsState>) {
  }

  createTicket(ticket: Ticket) {
    this.store.dispatch(new TicketActions.Add(ticket));
  }
}
