import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CreateClassDialogComponent } from './dialogs/create-class-dialog/create-class-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { classReducer } from './store/reducers/class.reducer';
import { ClassTableComponent } from './class-table/class-table.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { CreateEmployeeDialogComponent } from './dialogs/create-employee-dialog/create-employee-dialog.component'
import { employeeReducer } from './store/reducers/employee.reducer';
import { RemoveClassDialogComponent } from './dialogs/remove-class-dialog/remove-class-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

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
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    StoreModule.forRoot({
      classes: classReducer,
      employees: employeeReducer,
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
