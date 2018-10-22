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

export const SAVE    = '[Ticket] Save';
export class Save implements Action {
    readonly type = SAVE;

    constructor(public payload: Ticket) {}
}

export const SET_SELECTED    = '[Ticket] SET_SELECTED';
export class SetSelected implements Action {
    readonly type = SET_SELECTED;

    constructor(public payload: Ticket) {}
}

export type Actions
  = Add
  | Remove
  | SetView
  | Save
  | SetSelected;
