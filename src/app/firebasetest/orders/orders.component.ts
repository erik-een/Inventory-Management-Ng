import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders-service/orders.service';

export interface ICoffeeOrder {
  customerName: string;
  orderNumber: number;
  coffeeOrder: number;
  completed: boolean;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  coffees = [
    'Americano',
    'Flat White',
    'Cappuccino',
    'Latte',
    'Espresso',
    'Macchiato',
    'Mocha',
    'Hot Chocolate',
    'Tea',
  ];

  coffeeOrder: string[] = [];
  addCoffee(coffee: string) {
    return this.coffeeOrder.push(coffee);
  }

  removeCoffee = (coffee: string) => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };

  onSubmit() {}
  constructor(public ordersService: OrdersService) {}

  ngOnInit(): void {}
}
