import { Component, OnInit } from '@angular/core';
import { InventoryListService } from "../inventory-list-service/inventory-list.service";
import { Inventory } from 'src/app/models/iInventorylist';

@Component({
  selector: 'app-inventory-list-item',
  templateUrl: './inventory-list-item.component.html',
  styleUrls: ['./inventory-list-item.component.scss']
})
export class InventoryListItemComponent implements OnInit {
  public mockInventoryList: Inventory[] = [];
  constructor(private InventoryListService: InventoryListService) { }

  ngOnInit(): void {
    this.loadInventory()
  }

  private loadInventory(): void {
    this.InventoryListService
      .getInventory()
      .subscribe((mockInventory: Inventory[]) => this.mockInventoryList = mockInventory);
  }

}