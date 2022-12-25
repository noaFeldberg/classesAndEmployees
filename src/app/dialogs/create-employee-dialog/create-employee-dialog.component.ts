import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassData } from 'src/app/store/models/class.model';

@Component({
  selector: 'app-create-employee-dialog',
  templateUrl: './create-employee-dialog.component.html',
  styleUrls: ['./create-employee-dialog.component.css']
})
export class CreateEmployeeDialogComponent {
  employeeName?: string;
  employeeClass?: ClassData;
  classes: ClassData[];
      
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    private data: {
      classes: ClassData[];
      saveCallback: (name: string, classData: ClassData) => void;
    },
    private dialogRef: MatDialogRef<CreateEmployeeDialogComponent>) {
      this.classes = this.data.classes;
    }

    onSave() {
      this.data.saveCallback(this.employeeName, this.employeeClass);
      this.dialogRef.close();
    }

    onCancel() {
      this.dialogRef.close();
    }
}
