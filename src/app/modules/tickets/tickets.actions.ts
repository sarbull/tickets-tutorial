import { Action } from '@ngrx/store'
import { Ticket } from './tickets.model'

export const ADD       = '[Ticket] ADD'
export class Add implements Action {
    readonly type = ADD

    constructor(public payload: Ticket) {}
}

export const REMOVE    = '[Ticket] REMOVE'
export class Remove implements Action {
    readonly type = REMOVE

    constructor(public payload: number) {}
}

export type Actions = Add | Remove
