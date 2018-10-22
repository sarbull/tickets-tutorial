import { NgModule } from '@angular/core';
import { StoreModule, ActionReducer } from '@ngrx/store';

import { AppContainer } from './app.container';

import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../environments/environment';
import { CustomCommonModule } from './modules/common';
import { TicketsModule } from './modules/tickets';

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
      {},
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
