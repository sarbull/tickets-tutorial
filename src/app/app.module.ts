import { NgModule } from '@angular/core';
import { StoreModule, ActionReducer } from '@ngrx/store';

import { AppContainer } from './app.container';
import {
  TicketsModule,
  reducer as TicketsReducer
} from './modules/tickets';

import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../environments/environment';
import { CustomCommonModule } from './modules/common';

export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [
    AppContainer
  ],
  imports: [
    CustomCommonModule,
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
