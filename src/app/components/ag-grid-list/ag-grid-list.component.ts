import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { GetDataService } from '../../core/services/getDataService/get-data.service';

@Component({
  selector: 'app-ag-grid-list',
  imports: [AgGridAngular],
  templateUrl: './ag-grid-list.component.html',
  styleUrl: './ag-grid-list.component.scss',
})
export class AgGridListComponent {
  // Row Data: The data to be displayed.
  // rowData = [
  //   { item: 'Tesla', price: 64950, priority: true },
  //   { item: 'Ford', price: 33850, priority: false },
  //   { item: 'Toyota', price: 29600, priority: false },
  // ];
  rowData: any[] = [];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'name' },
    {
      field: 'city',
    },
    { field: 'state' },
    { field: 'state' },
    { field: 'availableUnits' },
    { field: 'wifi' },
    { field: 'laundry' },
  ];

  holidaysData: any[] = [];

  constructor(private getDataService: GetDataService) {
    this.getDataFromService();
  }

  getDataFromService() {
    this.rowData = this.getDataService.getAllHousingLocations();
  }
}
