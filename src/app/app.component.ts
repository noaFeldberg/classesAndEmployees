import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './app.state';
import { ClassData } from './store/models/class.model';
import { Employee } from './store/models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  companies = ["Run.ai", "Facebook", "Apple"];
  sidebarShow = true;
  selectedCompany;
  classClicked = true;
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

  changeCompany(companyName: string) {
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


