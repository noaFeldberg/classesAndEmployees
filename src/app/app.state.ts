import { ClassData } from "./store/models/class.model";
import { Employee } from "./store/models/employee.model";

export interface AppState {
  readonly classes: ClassData[];
  readonly employees: Employee[];
}