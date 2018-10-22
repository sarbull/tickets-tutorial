import { NgModule } from '@angular/core';
import { CustomCommonModule } from '../common';
import { TicketsContainer } from './tickets.container';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketCreateComponent } from './components/ticket-create/ticket-create.component';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer as TicketsReducer } from './tickets.reducers';

@NgModule({
  declarations: [
    TicketsContainer,
    TicketDetailsComponent, // will this be used outside of the tickets container/module? no.
    TicketCreateComponent,
    TicketsListComponent
  ],
  imports: [
    CustomCommonModule,
    StoreModule.forFeature('ticketsModule', {
      tickets: TicketsReducer
    })
  ],
  exports: [
    TicketsContainer
  ]
})
export class TicketsModule { }
