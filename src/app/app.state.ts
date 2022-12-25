import { ClassData } from "./store/models/class.model";

export interface AppState {
  readonly classes: ClassData[];
}