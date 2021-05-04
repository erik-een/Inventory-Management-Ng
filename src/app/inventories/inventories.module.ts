import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoriesComponent } from './inventories.component';
import { InventoryListItemComponent } from './inventory-list-item/inventory-list-item.component';




@NgModule({
  declarations: [InventoriesComponent, InventoryComponent, InventoryListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [InventoriesComponent, InventoryComponent, InventoryListItemComponent]
})
export class InventoriesModule { }
