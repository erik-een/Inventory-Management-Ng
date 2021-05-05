import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Inventory } from 'src/app/models/iInventorylist';
import { InventoryListService } from '../inventory-list-service/inventory-list.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.scss'],
})
export class InventoryEditComponent implements OnInit {
  public mockInventoryList: Inventory[] = [];

  constructor(
    private InventoryListService: InventoryListService,
    private formBuilder: FormBuilder
  ) {}
  itemForm = this.formBuilder.group({
    itemName: [''],
    inStock: [''],
    departing: [''],
    arriving: [''],
  });

  ngOnInit(): void {
    this.loadInventory();
  }

  private loadInventory(): void {
    this.InventoryListService.getInventory().subscribe(
      (mockInventory: Inventory[]) => (this.mockInventoryList = mockInventory)
    );
  }
}
