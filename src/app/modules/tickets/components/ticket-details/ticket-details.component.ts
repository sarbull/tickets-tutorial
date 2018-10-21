import { Component, Input } from '@angular/core';
import { Ticket } from '../../tickets.model';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent {
  @Input() ticket: Ticket;
}
