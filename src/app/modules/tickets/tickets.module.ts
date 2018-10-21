import { NgModule } from '@angular/core';
import { TicketsContainer } from './tickets.container';
import { CustomCommonModule } from '../common';

@NgModule({
  declarations: [
    TicketsContainer
  ],
  imports: [
    CustomCommonModule
  ],
  exports: [
    TicketsContainer
  ]
})
export class TicketsModule { }
