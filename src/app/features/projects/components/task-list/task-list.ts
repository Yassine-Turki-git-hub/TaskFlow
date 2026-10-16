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
  getStatusClass(status: TypeStatus):string {
    switch(status){
      case TypeStatus.EnAttente: return 'status-todo';
      case TypeStatus.EnCours: return 'status-in-progress';
      case TypeStatus.Termine: return 'status-done';
      default: return '';
    }
  }

  //retourner la classe css correspondant à la priorité
  getPriorityClass(priority: TypePriority): string{
    switch(priority){
      case TypePriority.Basse: return 'priority-low';
      case TypePriority.Moyenne: return 'priority-medium';
      case TypePriority.Haute: return 'priority-high';
      default: return '';
    }
  }
}
