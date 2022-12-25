import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ClassData } from '../models/class.model';
import { Employee } from '../models/employee.model';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE'
export const CHANGE_EMPLOYEE_CLASS = 'CHANGE_EMPLOYEE_CLASS'

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;

  constructor(public payload: Employee) {}
}

export class RemoveEmployee implements Action {
  readonly type = REMOVE_EMPLOYEE;

  constructor(public payload: number) {}
}

export class ChangeEmployeeClass implements Action {
  readonly type = CHANGE_EMPLOYEE_CLASS;

  constructor(public payload: Employee) {}
}

export type Actions = AddEmployee | RemoveEmployee | ChangeEmployeeClass;