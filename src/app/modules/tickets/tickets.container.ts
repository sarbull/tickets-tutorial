import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TicketsState } from './tickets.model';

@Component({
  selector: 'app-tickets-container',
  templateUrl: './tickets.container.html',
  styleUrls: ['./tickets.container.scss']
})
export class TicketsContainer implements OnInit {
  @Input() view: string;
  state: any;

  constructor(private store: Store<TicketsState>) {
    this.state = {
      view: ''
    };
  }

  ngOnInit() {
  }
}
