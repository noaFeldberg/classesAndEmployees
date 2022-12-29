import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreateClassDialogComponent } from '../dialogs/create-class-dialog/create-class-dialog.component';
import { RemoveClassDialogComponent } from '../dialogs/remove-class-dialog/remove-class-dialog.component';
import * as ClassActions from '../store/actions/class.actions'
import { ClassData } from '../store/models/class.model';
import { Employee } from '../store/models/employee.model';
import * as EmployeeActions from '../store/actions/employee.actions'

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['../styles/table-style.css']
})
export class ClassTableComponent {
  @Input() company;
  @Input() classes;
  @Input() employees;

  constructor(private dialog: MatDialog, private store: Store<AppState>) {
  }

  addClass() {
    this.dialog.open(CreateClassDialogComponent,{
      height: '220px', 
      width: '300px',
      data:{
        saveCallback: (name: string) => {
          const id = Math.floor(Math.random() * 100);
          this.store.dispatch(new ClassActions.AddClass({name: name, id: id, company: this.company}))
        }
      }
    });
  }

  removeItem(classData: ClassData) {
    const classEmployees = this.employees.filter(e => e.classData.id === classData.id);
    const otherClasses = this.classes.filter(c => c.id !== classData.id)

    this.dialog.open(RemoveClassDialogComponent,{
      height: '260px', 
      width: '320px',
      data:{
        class: classData,
        otherClasses: otherClasses,
        employees: classEmployees,
        deleteCallback: (classId: number) => {
          this.store.dispatch(new ClassActions.RemoveClass(classId))
        },
        deleteWithEmployees: (classId: number, employees: Employee[], selectedClassId: number | undefined) => {
          if (selectedClassId) {
            const selectedClass: ClassData = this.classes.find(c => c.id == selectedClassId);
            employees.forEach(e => {
              const newEmployee = {...e, classData: selectedClass}
              this.store.dispatch(new EmployeeActions.ChangeEmployeeClass(newEmployee))
            })
          } else {
            employees.forEach(e => {
              this.store.dispatch(new EmployeeActions.RemoveEmployee(e.id));
            })
          }
          this.store.dispatch(new ClassActions.RemoveClass(classId));
        },
      }
    });
  }
}
