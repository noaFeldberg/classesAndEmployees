import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ClassData } from '../models/class.model';

export const ADD_CLASS = 'ADD_CLASS'
export const REMOVE_CLASS = 'REMOVE_CLASS'

export class AddClass implements Action {
  readonly type = ADD_CLASS;

  constructor(public payload: ClassData) {}
}

export class RemoveClass implements Action {
  readonly type = REMOVE_CLASS;

  constructor(public payload: number) {}
}

export type Actions = AddClass | RemoveClass;