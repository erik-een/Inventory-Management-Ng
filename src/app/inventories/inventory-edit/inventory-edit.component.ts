import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iInventory } from 'src/app/models/iInventorylist';
import { InventoryListService } from '../inventory-list-service/inventory-list.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.scss'],
})
export class InventoryEditComponent implements OnInit {
  public mockInventoryList: iInventory[] = [];
  itemCRUDForm: FormGroup = this.creatItemCRUDForm();

  constructor(
    private _InventoryListService: InventoryListService,
    private _formBuilder: FormBuilder
  ) {}
  private creatItemCRUDForm(): FormGroup {
    return this._formBuilder.group({
      itemName: ['', Validators.required],
      inStock: ['', Validators.required],
      departing: ['', Validators.required],
      arriving: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this._loadInventory();
  }

  private _loadInventory(): void {
    this._InventoryListService
      .getInventory()
      .subscribe(
        (mockInventory: iInventory[]) =>
          (this.mockInventoryList = mockInventory)
      );
  }
}
