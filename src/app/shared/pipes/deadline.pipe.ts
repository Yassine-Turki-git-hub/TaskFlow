import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'deadline',
    standalone: true
})
export class DeadlinePipe implements PipeTransform{
    transform(dueDateStr: string | undefined | null) :string {
        if (!dueDateStr){
            return "Pas d'échéance";
        }
        const today  = new Date();
        today.setHours(0, 0, 0, 0);

        const due = new Date(dueDateStr);
        due.setHours(0, 0, 0, 0);

        const diffTime = due.getTime() - today.getTime();
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            return "Aujourd'hui";
        } else if (diffDays === 1){
            return "Demain";
        } else if (diffDays > 1) {
            return `Dans ${diffDays} jours`;
        } else {
            const positiveDays = Math.abs(diffDays);
            if (positiveDays === 1){
                return "En retard de 1 jour";
            }
            return `En retard de ${positiveDays} jours`;
        }
    }
}