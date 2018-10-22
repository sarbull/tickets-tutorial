import { TicketsContainer } from './tickets.container';
import { TicketsModule } from './tickets.module';
import { reducer } from './tickets.reducers';
import { TicketsState, TicketInterface, Ticket } from './tickets.model';
import * as TicketsActions from './tickets.actions';

import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketCreateComponent } from './components/ticket-create/ticket-create.component';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { TicketEditComponent } from './components/ticket-edit/ticket-edit.component';
export {
  TicketsContainer,
  TicketDetailsComponent,
  TicketCreateComponent,
  TicketsListComponent,
  TicketEditComponent,
  TicketsModule,
  TicketsActions,
  reducer,
  TicketsState,
  TicketInterface,
  Ticket
};
