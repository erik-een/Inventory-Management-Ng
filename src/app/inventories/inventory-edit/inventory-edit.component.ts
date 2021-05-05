import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/models/iInventorylist';
import { InventoryListService } from '../inventory-list-service/inventory-list.service';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.scss'],
})
export class InventoryEditComponent implements OnInit {
  public mockInventoryList: Inventory[] = [];

  constructor(private InventoryListService: InventoryListService) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  private loadInventory(): void {
    this.InventoryListService.getInventory().subscribe(
      (mockInventory: Inventory[]) => (this.mockInventoryList = mockInventory)
    );
  }
}
