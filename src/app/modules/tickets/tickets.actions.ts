import { Action } from '@ngrx/store';
import { Ticket } from './tickets.model';

export const SET_VIEW       = '[Ticket] SET_VIEW';
export class SetView implements Action {
    readonly type = SET_VIEW;

    constructor(public payload: string) {}
}

export const ADD       = '[Ticket] ADD';
export class Add implements Action {
    readonly type = ADD;

    constructor(public payload: Ticket) {}
}

export const REMOVE    = '[Ticket] REMOVE';
export class Remove implements Action {
    readonly type = REMOVE;

    constructor(public payload: number) {}
}

export type Actions
  = Add
  | Remove
  | SetView;
