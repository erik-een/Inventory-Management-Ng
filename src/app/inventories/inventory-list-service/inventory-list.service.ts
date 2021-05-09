import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockInventory } from 'src/app/mocks/mockinventory';
import { Inventory } from 'src/app/models/iInventorylist';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class InventoryListService {
  private dbPath: any = '/app/mocks/mockinventory';
  inventoryRef: AngularFireList<Inventory[]>;

  createInventoryItem(item: Inventory[]): void {
    this.inventoryRef.push(item);
  }

  getInventoryList(): AngularFireList<Inventory[]> {
    return this.inventoryRef;
  }
  updateInventoryItem(key: string, value: any): Promise<void> {
    return this.inventoryRef.update(key, value);
  }
  deleteInventoryItem(key: string) {
    return this.inventoryRef.remove(key);
  }

  constructor(private db: AngularFireDatabase) {
    this.inventoryRef = db.list(this.dbPath);
  }

  addInventoryItem(inventoryItem: Inventory): Observable<number> {
    const listOfInventory: Array<Inventory> = mockInventory;
    console.log(listOfInventory);
    const id: number =
      listOfInventory
        .map((inventoryItem) => inventoryItem.id)
        .sort()
        .reverse()[0] + 1;
    return of(
      mockInventory.push({
        ...inventoryItem,
        id,
      })
    );
  }

  itemCRUDForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    barCode: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    nameOfItem: new FormControl('', Validators.required),
    parked: new FormControl('', [Validators.required, Validators.minLength(1)]),
    addedOnDate: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  getInventory(): Observable<Inventory[]> {
    return of(mockInventory);
  }
}
