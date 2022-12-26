import { Action } from '@ngrx/store'
import * as EmployeeActions from '../actions/employee.actions'
import { Employee } from '../models/employee.model';


export function employeeReducer(state: Employee[] = [], action: EmployeeActions.Actions) {
  let index;
  let newState;

  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      return [...state, action.payload]

    case EmployeeActions.REMOVE_EMPLOYEE:
      newState = [...state];
      index = newState.findIndex((c) => c.id === action.payload);
      newState.splice(index, 1);
      return newState;

    case EmployeeActions.CHANGE_EMPLOYEE_CLASS:
      newState = [...state];
      index = newState.findIndex((c) => c.id === action.payload.id);
      newState.splice(index, 1);
      return [...newState, action.payload]
    default:
      return state;
  }
}