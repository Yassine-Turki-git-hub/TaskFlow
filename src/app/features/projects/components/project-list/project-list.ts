import { Component, computed, inject, OnInit, signal } from '@angular/core';
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
  projects = signal<ProjectModel[]>([]);
  searchTerm = signal<string>('');
  //signal pour suivre l'ID du projet séléctionné (null pr=ar défaut)
  selectedProjectId = signal<number | null>(null);

  filteredProjects = computed(() =>{
    const term = this.searchTerm().toLowerCase().trim();
    const currentProjects = this.projects();
    if (!term){
      return currentProjects;
    }

    return currentProjects.filter(project => project.id.toString() === term || project.name.toLowerCase().includes(term) || project.description.toLowerCase().includes(term));
  } );
  
  
  ngOnInit(): void {
      this.projectService.getProjects$().subscribe(projectsData => {
        this.projects.set(projectsData);
      });
  }
  
  handleProjectSelection(selectedProject: ProjectModel): void {
    if (this.selectedProjectId() === selectedProject.id){
      this.selectedProjectId.set(null);
    } else {
      this.selectedProjectId.set(selectedProject.id);
    }
  }
  
}
