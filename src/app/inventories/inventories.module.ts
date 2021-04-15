import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoriesComponent } from './inventories.component';




@NgModule({
  declarations: [InventoriesComponent, InventoryListComponent, InventoryComponent],
  imports: [
    CommonModule
  ],
  exports: [InventoriesComponent, InventoryListComponent, InventoryComponent]
})
export class InventoriesModule { }
