import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassData } from 'src/app/store/models/class.model';

@Component({
  selector: 'app-create-employee-dialog',
  templateUrl: './create-employee-dialog.component.html',
  styleUrls: ['../../styles/dialog-style.css']
})
export class CreateEmployeeDialogComponent {
  employeeName?: string;
  employeeClass?: ClassData;
  classes: ClassData[];
  selectedClassId?: number;
      
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
      if (this.selectedClassId && this.employeeName) {
        this.employeeClass = this.classes.find(c => c.id == this.selectedClassId);
        this.data.saveCallback(this.employeeName, this.employeeClass!);
      }
      this.dialogRef.close();
    }
}
