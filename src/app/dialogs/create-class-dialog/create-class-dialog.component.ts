import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core'; 

interface classData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-create-class-dialog',
  templateUrl: './create-class-dialog.component.html',
  styleUrls: ['./create-class-dialog.component.css']
})

export class CreateClassDialogComponent {
  className?: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    private data: {
      saveCallback: () => void;
    },
    private dialogRef: MatDialogRef<CreateClassDialogComponent>) {}


    onSave() {
      const classesStored = window.localStorage.getItem('classes');
      let classes = [];
      if (classesStored !== null) {
        classes = JSON.parse(classesStored);
      }
      const newClass: classData = {
        id: Math.random(),
        name: this.className!
      };
      classes.push(newClass);
      window.localStorage.setItem('classes', JSON.stringify(classes));
      this.data.saveCallback();
      this.dialogRef.close();
    }

    onCancel() {
      this.dialogRef.close();
    }
}
