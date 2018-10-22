export interface TicketsState {
  selected: Ticket;
  view: string;
  data: Ticket[];
}

export interface TicketInterface {
  id: number;
  title: string;
  description: string;
}

export class Ticket implements TicketInterface {
  id: number;
  title: string;
  description: string;
}
