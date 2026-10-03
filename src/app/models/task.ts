import {TypePriority} from './type-priority';
import {TypeStatus} from './type-status';
export class Task {
    id : number;
    title: string;
    priority: TypePriority;
    status: TypeStatus;
}
