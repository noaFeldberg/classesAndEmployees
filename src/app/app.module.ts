import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CreateClassDialogComponent } from './dialogs/create-class-dialog/create-class-dialog.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { classReducer } from './store/reducers/class.reducer';
import { ClassTableComponent } from './class-table/class-table.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { CreateEmployeeDialogComponent } from './dialogs/create-employee-dialog/create-employee-dialog.component'
import { employeeReducer } from './store/reducers/employee.reducer';
import { RemoveClassDialogComponent } from './dialogs/remove-class-dialog/remove-class-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClassDialogComponent,
    ClassTableComponent,
    EmployeesTableComponent,
    CreateEmployeeDialogComponent,
    RemoveClassDialogComponent,
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    StoreModule.forRoot({
      classes: classReducer,
      employees: employeeReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
