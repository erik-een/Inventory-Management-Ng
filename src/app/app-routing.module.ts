import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoriesComponent } from './inventories/inventories.component';

const routes: Routes = [
  { path: 'inventories', component: InventoriesComponent },
  { path: '**', redirectTo: 'inventories' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
