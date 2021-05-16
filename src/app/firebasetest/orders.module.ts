import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [OrdersComponent, OrdersListComponent],
  imports: [CommonModule, ReactiveFormsModule, AppMaterialModule],
  exports: [OrdersListComponent, OrdersComponent],
})
export class OrdersModule {}
