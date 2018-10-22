import { Component, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../../tickets.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent {
  @Output() ticket: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  createTicket(): void {
    this.ticket.emit(this.form.value); // {title: 'Title #1', description: 'lorem'}
  }
}
