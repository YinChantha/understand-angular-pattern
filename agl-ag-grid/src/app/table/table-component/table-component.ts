import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { themeBalham } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [CommonModule, FormsModule, AgGridAngular],
  templateUrl: './table-component.html',
  styleUrls: ['./table-component.scss'],
})
export class TableComponent {
  theme = themeBalham;
  rowData: any[] = [];
  quickFilterText = '';

  columnDefs: ColDef[] = [
    {
      headerName: '',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 50,
      pinned: 'left',
    },
    { field: 'id', width: 80, pinned: 'left' },
    { field: 'athlete', rowGroup: true },
    {
      field: 'age',
      editable: true,
      filter: false,
    },
    {
      field: 'country',
              filter: true,
        floatingFilter: true

    },
    { field: 'year', filter: 'agNumberColumnFilter' },
    { field: 'sport' },
    { field: 'event' },
    { field: 'gender' },
    { field: 'gold', filter: 'agNumberColumnFilter' },
    { field: 'silver', filter: 'agNumberColumnFilter' },
    { field: 'bronze', filter: 'agNumberColumnFilter' },
    { field: 'total', filter: 'agNumberColumnFilter' },
    { field: 'team' },
    { field: 'city' },
    { field: 'date' },
  ];

  // defaultColDef: ColDef = {
  //   sortable: true,
  //   filter: true,
  //   resizable: true,
  // };
  
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    editable: true,
    menuTabs: ['generalMenuTab', 'columnsMenuTab'], // This enables the menu on all columns
  };

  constructor(private http: HttpClient) {}

  onGridReady(params: any) {
    this.http.get<any[]>('https://retoolapi.dev/OeiKgu/data').subscribe((data) => {
      this.rowData = data.map((item) => ({
        ...item,
        age: Number(item.age),
        year: Number(item.year),
        gold: Number(item.gold),
        silver: Number(item.silver),
        bronze: Number(item.bronze),
        total: Number(item.total),
        team: item.team === 'true',
      }));
    });
  }
}
