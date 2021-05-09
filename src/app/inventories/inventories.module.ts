import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryDisplayComponent } from './inventory-display/inventory-display.component';
import { InventoriesComponent } from './inventories.component';
import { SharedModule } from '../shared/shared.module';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';
import { InventoryListService } from './inventory-list-service/inventory-list.service';

@NgModule({
  declarations: [
    InventoriesComponent,
    InventoryDisplayComponent,
    InventoryEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  exports: [
    InventoriesComponent,
    InventoryDisplayComponent,
    InventoryEditComponent,
  ],
  providers: [InventoryListService],
})
export class InventoriesModule {}
