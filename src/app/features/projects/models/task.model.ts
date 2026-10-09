import {TypePriority} from './type-priority';
import {TypeStatus} from './type-status';
export interface TaskModel {
    id: number;
    title: string;
    priority: TypePriority;
    status: TypeStatus;
}
