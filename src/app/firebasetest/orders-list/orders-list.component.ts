import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { OrdersService } from '../orders-service/orders.service';
// export interface ICoffeeOrder {
//   customerName: string;
//   orderNumber: number;
//   coffeeOrder: number;
//   completed: boolean;
//   payload:
// }
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  public coffeeOrders: any[] = [];
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getCoffeeOrders();
  }
  getCoffeeOrders() {
    this.ordersService
      .getCoffeeOrders()
      .subscribe((res) => (this.coffeeOrders = res));
  }
}
