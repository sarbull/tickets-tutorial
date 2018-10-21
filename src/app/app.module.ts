import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule, ActionReducer } from '@ngrx/store';

import { AppContainer } from './app.container';
import { MaterialModule } from './modules/material';
import {
  TicketsModule,
  reducer as TicketsReducer
} from './modules/tickets';

import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../environments/environment';

export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [
    AppContainer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forRoot(
      {
        tickets: TicketsReducer
      },
      { metaReducers }
    ),
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
