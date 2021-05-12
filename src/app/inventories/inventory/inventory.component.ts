import { Component, OnInit } from '@angular/core';
import { iInventory } from 'src/app/models/iInventorylist';
import { InventoryListService } from '../inventory-list-service/inventory-list.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  public mockInventoryList: iInventory[] = [];

  constructor(private InventoryListService: InventoryListService) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  private loadInventory(): void {
    this.InventoryListService.getInventory().subscribe(
      (mockInventory: iInventory[]) => (this.mockInventoryList = mockInventory)
    );
  }
}
