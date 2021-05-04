import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockInventory } from 'src/app/mocks/mockinventory';
import { Inventory } from 'src/app/models/iInventorylist';

@Injectable({
  providedIn: 'root'
})
export class InventoryListService {

  constructor() { }

  getInventory(): Observable<Inventory[]> {
    return of(mockInventory);
  }

}
