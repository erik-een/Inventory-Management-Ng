import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoriesComponent } from './inventories/inventories.component';
import { InventoryEditComponent } from './inventories/inventory-edit/inventory-edit.component';

const routes: Routes = [
  { path: 'inventory', component: InventoriesComponent },
  { path: 'inventory-edit', component: InventoryEditComponent },
  { path: '**', redirectTo: 'inventories' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
