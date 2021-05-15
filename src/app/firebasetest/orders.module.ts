import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrdersComponent, OrdersListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [OrdersListComponent, OrdersComponent],
})
export class OrdersModule {}
