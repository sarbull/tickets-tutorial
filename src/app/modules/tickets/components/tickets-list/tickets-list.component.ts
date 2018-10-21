import { Component, Input } from '@angular/core';
import { Ticket } from '../../tickets.model';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent {
  @Input() tickets: Ticket[];

  displayedColumns: string[] = ['title', 'options'];
}
