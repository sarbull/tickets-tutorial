import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Ticket } from '../../tickets.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {
  @Output() ticket: EventEmitter<Ticket> = new EventEmitter<Ticket>();
  @Input() selected: Ticket;

  form: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.form.setValue(this.selected);
  }

  updateTicket(): void {
    this.ticket.emit(this.form.value);
  }
}
