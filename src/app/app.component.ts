import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateClassDialogComponent } from './dialogs/create-class-dialog/create-class-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'runai-companies';
  companies = ["Run.ai", "Facebook", "Apple"];
  sidebarShow = false;
  
  classClicked = false;
  bla=false;


  constructor(private dialog: MatDialog) {
  }

  clickOnClasses() {
    this.classClicked = !this.classClicked;
  }

  addClass() {
    this.bla = true;
    this.dialog.open(CreateClassDialogComponent,{
      panelClass: ['custom-modalbox'],
      height: '350px', 
      width: '100px',
      data:{
        message: 'Are you sure want to delete?',
      }
    });

  }
}


