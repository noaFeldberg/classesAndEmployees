import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreateEmployeeDialogComponent } from '../dialogs/create-employee-dialog/create-employee-dialog.component';
import * as EmployeeActions from '../store/actions/employee.actions'
import { ClassData } from '../store/models/class.model';
import { Employee } from '../store/models/employee.model';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent {
  @Input() company;
  @Input() employees;
  @Input() classes;

  constructor(private dialog: MatDialog, private store: Store<AppState>) {}

  addEmployee() {
    this.dialog.open(CreateEmployeeDialogComponent,{
      height: '350px', 
      width: '100px',
      data:{
        classes: this.classes,
        saveCallback: (name: string, classData: ClassData) => {
          const id = Math.floor(Math.random() * 100);
          this.store.dispatch(new EmployeeActions.AddEmployee({name: name, id: id, company: this.company, class: classData}))
        }
      }
    });
  }

  removeItem(employee: Employee) {
    this.store.dispatch(new EmployeeActions.RemoveEmployee(employee.id))
  }
}

