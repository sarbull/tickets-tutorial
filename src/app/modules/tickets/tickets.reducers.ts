
import { Ticket, TicketsState } from './tickets.model';
import * as TicketActions from './tickets.actions';

const initialState: TicketsState = {
  view: 'LIST_TICKETS',
  data: [
    {
      id: 1,
      title: 'Ticket #1',
      description: 'Lorem ipsum dolor.'
    }
  ]
};

const mapper = {
  [TicketActions.SET_VIEW]: (state: TicketsState, payload: string | any): TicketsState => {
    return {
      ...state,
      view: payload,
    };
  },
  [TicketActions.ADD]: (state: TicketsState, payload: Ticket | any): TicketsState => {
    return {
      ...state,
      view: 'LIST_TICKETS',
      data: [
        ...state.data,
        payload
      ]
    };
  },
  [TicketActions.REMOVE]: (state: TicketsState, payload: number | any): TicketsState => {
    return {
      ...state,
      data: [
        ...state.data.filter(t => t.id !== payload)
      ]
    };
  }
};

export function reducer(state: TicketsState = initialState, action: TicketActions.Actions): TicketsState {
  if (mapper[action.type]) {
    return mapper[action.type](state, action.payload);
  }

  console.warn(`${action.type} was not found!`);

  return {
    ...state
  };
}
