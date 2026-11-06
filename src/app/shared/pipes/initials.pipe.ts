import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'initials',
    standalone: true
})
export class InitialsPipe implements PipeTransform {
    transform(value: string | undefined | null) :string {
        if (!value || value.trim() === '') {
            return '?';
        }
        const words = value.trim().split(/\s+/);
        let initials = '';
        for (let i =0; i < Math.min(words.length, 2); i++){
            initials += words[i].charAt(0).toUpperCase();
        }
        return initials;
    }
}