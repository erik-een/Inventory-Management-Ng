import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders-service/orders.service';

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

  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;

    this.ordersService.createCoffeeOrder(data).then((res) => {});
    alert('Order successful');
    this.ordersService.form.reset();
  }
  constructor(public ordersService: OrdersService) {}

  ngOnInit(): void {}
}
