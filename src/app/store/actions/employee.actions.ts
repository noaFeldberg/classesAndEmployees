import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ClassData } from '../models/class.model';
import { Employee } from '../models/employee.model';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE'

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;

  constructor(public payload: Employee) {}
}

export class RemoveEmployee implements Action {
  readonly type = REMOVE_EMPLOYEE;

  constructor(public payload: number) {}
}

export type Actions = AddEmployee | RemoveEmployee;