import { Component, Input } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import {TypeStatus} from '../../models/type-status';
import {TypePriority} from '../../models/type-priority';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone:true,
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})
export class TaskList {
  @Input({required: true}) tasks: TaskModel[] = [];
  //retourner la classe css corespondantau statut
  getStatusClass(status: TypeStatus): string {
    switch (status) {
      case TypeStatus.EnAttente: 
        return 'border-l-sky-400 bg-sky-50/50';
      case TypeStatus.EnCours: 
        return 'border-l-amber-500 bg-amber-50/50';
      case TypeStatus.Termine: 
        return 'border-l-emerald-500 bg-emerald-50/50';
      default: 
        return 'border-l-gray-300 bg-gray-50';
    }
  }

  //retourner la classe css correspondant à la priorité
  getPriorityClass(priority: TypePriority): string {
    switch (priority) {
      case TypePriority.Basse: 
        return 'bg-emerald-100 text-emerald-800';
      case TypePriority.Moyenne: 
        return 'bg-amber-100 text-amber-800';
      case TypePriority.Haute: 
        return 'bg-rose-100 text-rose-800';
      default: 
        return 'bg-gray-100 text-gray-800';
    }
  }
}
