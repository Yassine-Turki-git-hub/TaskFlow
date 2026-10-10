import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectCard } from '../project-card/project-card';
import { ProjectService } from '../../../../core/services/project.service';
import { ProjectModel } from '../../models/project.model';

@Component({
  imports: [CommonModule, FormsModule, ProjectCard],
  standalone: true,
  selector: 'app-project-list',
  styleUrl: './project-list.css',
  templateUrl: './project-list.html',
})
export class ProjectList implements OnInit {
  private projectService = inject(ProjectService);
  projects: ProjectModel[] = [];
  filteredProjects: ProjectModel[] = [];
  searchTerm: string= '';
  
  ngOnInit(): void {
      this.projects = this.projectService.getProjects();
      this.filteredProjects = [...this.projects];
  }
  onSearchChange() : void {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredProjects = [...this.projects];
      return;
    }
    this.filteredProjects = this.projects.filter(project => project.id.toString() === term || project.name.toLowerCase().includes(term) || project.description.toLowerCase().includes(term));
  }
  handleProjectSelection(selectedProject: ProjectModel): void {
    console.log("Projet sélectionné:", selectedProject.name);
    //logique métier ...
  }
}
