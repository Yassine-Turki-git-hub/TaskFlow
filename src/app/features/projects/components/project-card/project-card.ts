import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectModel } from '../../models/project.model';

@Component({
  imports: [CommonModule],
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

  onSelectProject(): void {
    this.selectProject.emit(this.project);
  }
}
