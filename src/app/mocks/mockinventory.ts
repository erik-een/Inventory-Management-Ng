import { Inventory } from '../models/iInventorylist';
const currentDate: Date = new Date();

export const mockInventory: Inventory[] = [
  {
    id: 1,
    barCode: 234546,
    nameOfItem: 'Fork',
    parked: 100,
    departing: 10,
    arriving: 20,
    addedOnDate: currentDate,
  },
  {
    id: 2,
    barCode: 232134,
    nameOfItem: 'Knife',
    parked: 100,
    departing: 10,
    arriving: 20,
    addedOnDate: currentDate,
  },
  {
    id: 3,
    barCode: 65676,
    nameOfItem: 'Plate',
    parked: 100,
    departing: 10,
    arriving: 20,
    addedOnDate: currentDate,
  },
  {
    id: 4,
    barCode: 5745646,
    nameOfItem: 'Coffee cup',
    parked: 100,
    departing: 10,
    arriving: 20,
    addedOnDate: currentDate,
  },
  {
    id: 5,
    barCode: 57646,
    nameOfItem: 'Coffee saucer',
    parked: 100,
    departing: 10,
    arriving: 20,
    addedOnDate: currentDate,
  },
];
