import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoriesComponent } from './inventories.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [InventoriesComponent, InventoryComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [InventoriesComponent, InventoryComponent]
})
export class InventoriesModule { }
