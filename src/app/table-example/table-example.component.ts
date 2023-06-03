import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent {

  student_arr: Student[] = [
    { name: 'Serxan', surname: 'Hacibeyov', age: 22 },
    { name: 'Shixismayil', surname: 'Agayev', age: 21 },
    { name: 'Turkana', surname: 'Mammadova', age: 24 },
    { name: 'Zehra', surname: 'Letif', age: 18 },
    { name: 'MuhemmedHuseyn', surname: 'Kerimov', age: 16 },
    { name: 'Eli', surname: 'Yusubov', age: 17 },
    { name: 'Qafar', surname: 'Humbetov', age: 17 }
  ];

  displayedColumns = ['name', 'surname', 'age'];
  dataSource = new MatTableDataSource<Student>(this.student_arr);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;



  ngAfterViewInit() {
    if (this.paginator)
      this.dataSource.paginator = this.paginator;
    if (this.sort)
      this.dataSource.sort = this.sort;

  }
}


