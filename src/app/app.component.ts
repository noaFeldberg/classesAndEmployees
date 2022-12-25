import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from './app.state';
import { CreateClassDialogComponent } from './dialogs/create-class-dialog/create-class-dialog.component';
import { ClassData } from './store/models/class.model';
import * as ClassActions from './store/actions/class.actions'
import { Employee } from './store/models/employee.model';

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
  employeesClicked = false;

  classes: ClassData[] = [];
  filteredClasses: ClassData[] = [];

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  private subscriptions: Subscription[] = [];


  constructor(private store: Store<AppState>) {
    this.selectedCompany = window.localStorage.getItem('company') || this.companies[0];
  }

  ngOnInit(): void {
    this.subscriptions.push(this.store.select('classes').subscribe((classes) => {
      this.classes = classes;
      this.filteredClasses = this.classes.filter(c => c.company == this.selectedCompany);
    }));

    this.subscriptions.push(this.store.select('employees').subscribe((employees) => {
      this.employees = employees;
      this.filteredEmployees = this.employees.filter(c => c.company == this.selectedCompany);
    }));
  }

  changeCompany(companyName) {
    this.selectedCompany = companyName;
    window.localStorage.setItem('company', companyName);
    this.filteredClasses = this.classes.filter(c => c.company == companyName);
    this.filteredEmployees = this.employees.filter(c => c.company == companyName);
  }


  clickOnClasses() {
    this.employeesClicked = false;
    this.classClicked = true;
  }

  clickOnEmployees() {
    this.classClicked = false;
    this.employeesClicked = true;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe())
  }
  
}


