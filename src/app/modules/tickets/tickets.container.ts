import { Component, OnInit } from '@angular/core';
import { TicketState } from './tickets.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tickets-container',
  templateUrl: './tickets.container.html',
  styleUrls: ['./tickets.container.scss']
})
export class TicketsContainer implements OnInit {
  state: TicketState;

  constructor(private store: Store<TicketState>) {
    this.state = {
      data: []
    };
  }

  ngOnInit() {
    this.store.select('tickets').subscribe((data: TicketState) => {

    });
  }

}
