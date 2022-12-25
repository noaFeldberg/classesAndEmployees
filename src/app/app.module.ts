import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CreateClassDialogComponent } from './dialogs/create-class-dialog/create-class-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CreateClassDialogComponent,
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
