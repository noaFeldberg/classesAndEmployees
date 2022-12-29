import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassData } from 'src/app/store/models/class.model';
import { Employee } from 'src/app/store/models/employee.model';

@Component({
  selector: 'app-remove-class-dialog',
  templateUrl: './remove-class-dialog.component.html',
  styleUrls: ['../../styles/dialog-style.scss']
})
export class RemoveClassDialogComponent {
  employees: Employee[];
  class: ClassData;
  otherClasses: ClassData[];
  selectedClassId = undefined;
      
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    private data: {
      class: ClassData;
      otherClasses: ClassData[];
      employees: Employee[];
      deleteCallback: (classId: number) => void;
      deleteWithEmployees: (classId: number, employees: Employee[], selectedClassId: number | undefined) => void;
    },
    private dialogRef: MatDialogRef<RemoveClassDialogComponent>) {
      this.employees = this.data.employees;
      this.class = this.data.class;
      this.otherClasses = this.data.otherClasses;
    }

    onDelete() {
      this.data.deleteCallback(this.class.id);
      this.dialogRef.close();
    }

    onDeleteWithEmployees() {
      this.data.deleteWithEmployees(this.class.id, this.employees, this.selectedClassId);
      this.dialogRef.close();
    }
    
}
