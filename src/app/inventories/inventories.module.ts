import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoriesComponent } from './inventories.component';
import { SharedModule } from '../shared/shared.module';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';
@NgModule({
  declarations: [
    InventoriesComponent,
    InventoryComponent,
    InventoryEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  exports: [InventoriesComponent, InventoryComponent, InventoryEditComponent],
})
export class InventoriesModule {}
