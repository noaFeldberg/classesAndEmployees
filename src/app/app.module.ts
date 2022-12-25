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
import { ClassTableComponent } from './class-table/class-table.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateClassDialogComponent,
    ClassTableComponent,
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
