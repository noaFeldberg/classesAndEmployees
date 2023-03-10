import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core'; 

@Component({
  selector: 'app-create-class-dialog',
  templateUrl: './create-class-dialog.component.html',
  styleUrls: ['../../styles/dialog-style.scss']
})

export class CreateClassDialogComponent {
  className?: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    private data: {
      saveCallback: (name: string) => void;
    },
    private dialogRef: MatDialogRef<CreateClassDialogComponent>) {}

    onSave() {
      if (this.className) {
        this.data.saveCallback(this.className);
        this.dialogRef.close();
      }
    }
}
