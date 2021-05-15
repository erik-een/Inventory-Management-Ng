import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './firebasetest/orders/orders.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { InventoryEditComponent } from './inventories/inventory-edit/inventory-edit.component';

const routes: Routes = [
  { path: 'inventory-edit', component: InventoryEditComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'inventory', component: InventoriesComponent },
  { path: '**', redirectTo: 'inventory' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
