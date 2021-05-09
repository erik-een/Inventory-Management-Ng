import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoriesComponent } from './inventories/inventories.component';
import { InventoryEditComponent } from './inventories/inventory-edit/inventory-edit.component';
import { InventoryDisplayComponent } from './inventories/inventory-display/inventory-display.component';

const routes: Routes = [
  { path: 'inventory-edit', component: InventoryEditComponent },
  { path: 'inventory-display', component: InventoryDisplayComponent },
  { path: 'inventories', component: InventoriesComponent },
  { path: '**', redirectTo: 'inventory-display' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
