import { CommonModule } from '@angular/common';
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
}
