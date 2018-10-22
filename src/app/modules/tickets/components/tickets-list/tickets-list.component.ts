import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../../tickets.model';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent {
  @Input() tickets: Ticket[];
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() edit: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  displayedColumns: string[] = ['title', 'description', 'options'];

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onEdit(t: Ticket) {
    this.edit.emit(t);
  }
}
