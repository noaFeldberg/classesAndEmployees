import { ClassData } from "./class.model";

export interface Employee {
  id: number;
  name: string;
  company: string;
  class: ClassData;
}