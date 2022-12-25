import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassData } from 'src/app/store/models/class.model';
import { Employee } from 'src/app/store/models/employee.model';

@Component({
  selector: 'app-remove-class-dialog',
  templateUrl: './remove-class-dialog.component.html',
  styleUrls: ['./remove-class-dialog.component.css']
})
export class RemoveClassDialogComponent {
  employees: Employee[];
  class: ClassData;
      
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    private data: {
      class: ClassData;
      employees: Employee[];
      saveCallback: () => void;
    },
    private dialogRef: MatDialogRef<RemoveClassDialogComponent>) {
      this.employees = this.data.employees;
      this.class = this.data.class;
    }

    onSave() {
      this.data.saveCallback();
      this.dialogRef.close();
    }

    onCancel() {
      this.dialogRef.close();
    }
}
