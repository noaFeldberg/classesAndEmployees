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
    case EmployeeActions.CHANGE_EMPLOYEE_CLASS:
      let newState1 = [...state];
      const index1 = newState1.findIndex((c) => c.id === action.payload.id);
      newState1.splice(index1, 1);
      return [...newState1, action.payload]
    default:
      return state;
  }
}