import { TypeStatus } from './type-status';
import { TaskModel } from './task.model';
export interface ProjectModel {
    id: number;
    name: string;
    description: string;
    status: TypeStatus;
    startDate: string;
    budget: number;
    tasks: TaskModel[];
}
