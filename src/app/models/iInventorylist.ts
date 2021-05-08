export interface Inventory {
  id: number;
  barCode: number;
  nameOfItem: string;
  parked: number;
  departing: number;
  arriving: number;
  addedOnDate?: Date;
}
