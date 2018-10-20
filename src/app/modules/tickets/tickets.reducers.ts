
import { Ticket, TicketState } from './tickets.model'
import * as TicketActions from './tickets.actions'

const initialState: TicketState = {
  data: []
};

const mapper = {
  [TicketActions.ADD]: (state: TicketState, payload: Ticket): TicketState => {
    return {
      ...state,
      data: [
        ...state.data,
        payload
      ]
    };
  },
  [TicketActions.REMOVE]: (state: TicketState, payload: number): TicketState => {
    return {
      ...state,
      data: [
        ...state.data.filter(t => t.id !== payload)
      ]
    };
  }
}

export function reducer(state: TicketState = initialState, action: any): TicketState {
  if (mapper[action.type]) {
    return mapper[action.type](state, action);
  }

  console.warn('${action.type} was not found!');

  return {
    ...state
  };
}
