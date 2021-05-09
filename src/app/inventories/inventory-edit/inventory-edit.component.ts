import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inventory } from 'src/app/models/iInventorylist';
import { InventoryListService } from '../inventory-list-service/inventory-list.service';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.scss'],
})
export class InventoryEditComponent implements OnInit {
  public mockInventoryList: Inventory[] = [];
  itemCRUDForm: FormGroup = this._InventoryListService.itemCRUDForm;

  constructor(
    public _InventoryListService: InventoryListService // private _formBuilder: FormBuilder
  ) {}
  // private createItemCRUDForm(): FormGroup {
  //   return this._formBuilder.group({
  // itemName: ['', Validators.required],
  // inStock: ['', Validators.required],
  // departing: ['', Validators.required],
  // arriving: ['', Validators.required],
  //   });
  // }

  ngOnInit(): void {
    this._loadInventory();
  }

  onClear(): void {
    this.itemCRUDForm.reset();
  }

  onSubmit(): void {
    console.log(this.itemCRUDForm.value);

    this._InventoryListService
      .addInventoryItem(this.itemCRUDForm.value)
      .subscribe(() => {
        this._loadInventory();
        this.itemCRUDForm.reset();
      });
  }

  private _loadInventory(): void {
    this._InventoryListService
      .getInventory()
      .subscribe(
        (mockInventory: Inventory[]) => (this.mockInventoryList = mockInventory)
      );
  }
}
