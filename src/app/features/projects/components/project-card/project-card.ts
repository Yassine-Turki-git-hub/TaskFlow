import { CommonModule, KeyValuePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectModel } from '../../models/project.model';
import { TaskList } from '../task-list/task-list';
import { TypeStatus } from '../../models/type-status';

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
  /*
  getNumberOfTasksPerPriority(): number{

    for (let task of this.project.tasks | KeyValuePipe )
  }
    */
}
