import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';

import { AppContainer } from './app.container';
import { MaterialModule } from './modules/material';
import {
  TicketsModule,
  reducer as TicketsReducer
} from './modules/tickets';

@NgModule({
  declarations: [
    AppContainer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forRoot({
      tickets: TicketsReducer
    }),
    TicketsModule
  ],
  exports: [
    AppContainer
  ],
  bootstrap: [
    AppContainer
  ]
})
export class AppModule { }
