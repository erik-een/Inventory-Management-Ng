import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoriesComponent } from './inventories.component';




@NgModule({
  declarations: [InventoriesComponent, InventoryComponent],
  imports: [
    CommonModule
  ],
  exports: [InventoriesComponent, InventoryComponent]
})
export class InventoriesModule { }
