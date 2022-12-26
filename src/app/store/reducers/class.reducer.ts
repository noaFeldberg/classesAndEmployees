import { Action } from '@ngrx/store'
import { ClassData } from '../models/class.model'
import * as ClassActions from '../actions/class.actions'


export function classReducer(state: ClassData[] = [], action: ClassActions.Actions) {
  switch (action.type) {
    case ClassActions.ADD_CLASS:
      return [...state, action.payload]

    case ClassActions.REMOVE_CLASS:
      let newState = [...state];
      const index = newState.findIndex((c) => c.id === action.payload);
      newState.splice(index, 1);
      return newState;
      
    default:
      return state;
  }
}