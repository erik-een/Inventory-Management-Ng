import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockInventory } from 'src/app/mocks/mockinventory';
import { iInventory } from 'src/app/models/iInventorylist';

@Injectable({
  providedIn: 'root',
})
export class InventoryListService {
  constructor() {}

  getInventory(): Observable<iInventory[]> {
    return of(mockInventory);
  }
}
