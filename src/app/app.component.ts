import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from './app.state';
import { CreateClassDialogComponent } from './dialogs/create-class-dialog/create-class-dialog.component';
import { ClassData } from './store/models/class.model';
import * as ClassActions from './store/actions/class.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  companies = ["Run.ai", "Facebook", "Apple"];
  sidebarShow = false;
  selectedCompany;
  classClicked = false;
  bla=false;

  classes: ClassData[] = [];

  private subscriptions: Subscription[] = [];


  constructor(private dialog: MatDialog, private store: Store<AppState>) {
    this.selectedCompany = window.localStorage.getItem('company') || this.companies[0];
  }

  ngOnInit(): void {
    this.subscriptions.push(this.store.select('classes').subscribe((classes) => {
      this.classes = classes;
    }));
  }

  changeCompany(companyName) {
    this.selectedCompany = companyName;
    window.localStorage.setItem('company', companyName);
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
        saveCallback: (name: string) => {
          const id = Math.floor(Math.random() * 100);
          this.store.dispatch(new ClassActions.AddClass({name: name, id: id, company: this.selectedCompany}))
        }
      }
    });
  }

  removeItem(index: number) {
    this.store.dispatch(new ClassActions.RemoveClass(index))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe())
  }

  
}


