import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { OrdersService } from '../orders-service/orders.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
export interface ICoffeeOrder {
  customerName: string;
  orderNumber: number;
  coffeeOrder: number;
  completed: boolean;
}
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements AfterViewInit {
  public coffeeOrders: any[] = [];
  displayedColumns: string[] = [
    'customerName',
    'orderNumber',
    'coffeeOrder',
    'completed',
  ];

  dataSource: MatTableDataSource<ICoffeeOrder>;
  private paginator: MatPaginator = null!;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.dataSource.paginator = this.paginator;
  }
  private sort: MatSort = null!;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.dataSource.sort = this.sort;
  }
  constructor(private ordersService: OrdersService) {
    this.dataSource = new MatTableDataSource(this.coffeeOrders);
  }

  ngAfterViewInit(): void {
    this.getCoffeeOrders();
  }
  console() {
    console.log(this.dataSource);
  }
  getCoffeeOrders() {
    this.ordersService
      .getCoffeeOrders()
      .subscribe((res) => (this.coffeeOrders = res));
  }
  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
