import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { mockInventory } from '../../mocks/mockinventory';
import { iInventory } from 'src/app/models/iInventorylist';
import { InventoryListService } from '../inventory-list-service/inventory-list.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements AfterViewInit {
  mockInventoryList: iInventory[] = mockInventory;
  displayedColumns: string[] = [
    'nameOfItem',
    'parked',
    'departing',
    'arriving',
  ];

  dataSource: MatTableDataSource<iInventory>;
  @ViewChild(MatPaginator) paginator: MatPaginator = null!;
  @ViewChild(MatSort) sort: MatSort = null!;

  constructor(private InventoryListService: InventoryListService) {
    this.dataSource = new MatTableDataSource(this.mockInventoryList);
  }
  // loadInventory(): void {
  //   this.InventoryListService.getInventory().subscribe(
  //     (mockInventory: iInventory[]) => (this.mockInventoryList = mockInventory)
  //   );
  // }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.loadInventory();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
