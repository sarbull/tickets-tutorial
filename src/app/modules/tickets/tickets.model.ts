export interface TicketState {
  data: Ticket[]
}

export interface TicketInterface {
  id: number;
  title: string;
}

export class Ticket implements TicketInterface {
  id: number;
  title: string;
}
