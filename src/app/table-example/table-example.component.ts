import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/models/student';
import { UsaData } from 'src/models/usa-data';
import { ApiService } from 'src/services/api-service';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent {

  constructor(public service: ApiService) {
    this.getData();
  }
  student_arr: Student[] = [
    { name: 'Serxan', surname: 'Hacibeyov', age: 22 },
    { name: 'Shixismayil', surname: 'Agayev', age: 21 },
    { name: 'Turkana', surname: 'Mammadova', age: 24 },
    { name: 'Zehra', surname: 'Letif', age: 18 },
    { name: 'MuhemmedHuseyn', surname: 'Kerimov', age: 16 },
    { name: 'Eli', surname: 'Yusubov', age: 17 },
    { name: 'Qafar', surname: 'Humbetov', age: 17 }
  ];

  usa_arr: UsaData[] | undefined;


  // displayedColumns = ['name', 'surname', 'age'];
  displayedColumns = ['nation', 'year', 'population'];

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;



  ngAfterViewInit() {
    if (this.paginator)
      this.dataSource.paginator = this.paginator;
    if (this.sort)
      this.dataSource.sort = this.sort;

  }

  getData() {
    // this.showSpinner=true;
    this.service.getData().subscribe(
      res => {
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(res.data);
        if (this.paginator)
          this.dataSource.paginator = this.paginator;
        if (this.sort)
          this.dataSource.sort = this.sort;

        //  this.showSpinner=false;
      },
      err => {
        console.log(err);
      });
  }

}


