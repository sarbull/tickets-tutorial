import { NgModule } from '@angular/core';
import { TicketsContainer } from './tickets.container';

@NgModule({
  declarations: [
    TicketsContainer
  ],
  exports: [
    TicketsContainer
  ]
})
export class TicketsModule { }
