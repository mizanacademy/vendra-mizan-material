import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-first-dialog',
  templateUrl: './first-dialog.component.html',
  styleUrls: ['./first-dialog.component.scss']
})
export class FirstDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FirstDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
