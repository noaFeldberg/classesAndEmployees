import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core'; 

@Component({
  selector: 'app-create-class-dialog',
  templateUrl: './create-class-dialog.component.html',
  styleUrls: ['./create-class-dialog.component.css']
})

export class CreateClassDialogComponent {
  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    private data: {
      message?: string;
    },
    private dialogRef: MatDialogRef<CreateClassDialogComponent>) {}
}
