import { Action } from '@ngrx/store'
import * as EmployeeActions from '../actions/employee.actions'
import { Employee } from '../models/employee.model';


export function employeeReducer(state: Employee[] = [], action: EmployeeActions.Actions) {
  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      return [...state, action.payload]
    case EmployeeActions.REMOVE_EMPLOYEE:
      let newState = [...state];
      const index = newState.findIndex((c) => c.id === action.payload);
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
}