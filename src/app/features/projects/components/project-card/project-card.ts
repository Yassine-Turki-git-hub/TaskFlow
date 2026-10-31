import { CommonModule, KeyValuePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectModel } from '../../models/project.model';
import { TaskList } from '../task-list/task-list';
import { TypeStatus } from '../../models/type-status';
import { TypePriority } from '../../models/type-priority';

@Component({
  imports: [CommonModule, TaskList],
  standalone: true,
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  @Input({required: true})
  project!: ProjectModel;
  @Output()
  selectProject = new EventEmitter<ProjectModel>();
  @Input() isSelected: boolean = false;

  //exposer l'enum du TypeStatus au template
  readonly TypeStatus = TypeStatus;

  onSelectProject(): void {
    this.selectProject.emit(this.project);
  }

  getAccomplishmentRatio(): number{
    let completeTasks:number = 0;
    for (const task of this.project.tasks){
      if (task.status === TypeStatus.Termine)
        completeTasks ++
    }
    return (completeTasks/this.project.tasks.length);
  }
  
  getNumberOfTasksPerPriority(): Record<TypePriority, number> {
  return this.project.tasks.reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {
    [TypePriority.Haute]: 0,
    [TypePriority.Moyenne]: 0,
    [TypePriority.Basse]: 0
  });
}
  
  getPriorityClass(priority: string): string {
    switch (priority as TypePriority) {
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
