import {Task} from './task';
import {TypeStatus} from './type-status';
export class Project {
    id!: number;
    name!: string;
    description!: string;
    status!: TypeStatus;
    tasks!: Task[];
}
