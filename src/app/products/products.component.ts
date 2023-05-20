import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirstDialogComponent } from '../dialogs/first-dialog/first-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  students = [
    {name: "Ismayil", title: ", Please, don't sleep"},
    {name: "Sever", title: ", Please, don't give harm to your eyes  in black room..."},
    {name: "Zehra", title: ", Please, prepare homeworks"},
    {name: "Turkane", title: ", Perfect"},
    {name: "M.Huseyn", title: ", Please, study"},
    {name: "Qafar", title: ", Please, don't sleep"},
    {name: "Ali", title: ", Please, go ahead"}
  ];
  constructor(public dialog: MatDialog) {}

  openDialog(name: string, title: string) {
    const dialogRef = this.dialog.open(FirstDialogComponent, {
      data: {name: name, title: title}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
