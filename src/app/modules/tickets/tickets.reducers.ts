
import { Ticket, TicketsState } from './tickets.model';
import * as TicketActions from './tickets.actions';

const initialState: TicketsState = {
  data: []
};

const mapper = {
  [TicketActions.ADD]: (state: TicketsState, payload: Ticket): TicketsState => {
    return {
      ...state,
      data: [
        ...state.data,
        payload
      ]
    };
  },
  [TicketActions.REMOVE]: (state: TicketsState, payload: number): TicketsState => {
    return {
      ...state,
      data: [
        ...state.data.filter(t => t.id !== payload)
      ]
    };
  }
};

export function reducer(state: TicketsState = initialState, action: any): TicketsState {
  if (mapper[action.type]) {
    return mapper[action.type](state, action.payload);
  }

  console.warn(`${action.type} was not found!`);

  return {
    ...state
  };
}
