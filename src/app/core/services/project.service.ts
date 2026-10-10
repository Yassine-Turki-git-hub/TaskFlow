import { Injectable, Service } from '@angular/core';
import { ProjectModel } from '../../features/projects/models/project.model';
import { PROJECTS_DATA } from '../../features/projects/data/projects.data';
import { Observable, of } from 'rxjs';

@Service()
export class ProjectService {
    getProjects(): ProjectModel[] {
        return PROJECTS_DATA;
    }

    getProjects$(): Observable<ProjectModel[]>{
        return of(PROJECTS_DATA);
    }

    getProjectById(id:number): ProjectModel | undefined {
        return PROJECTS_DATA.find(p => p.id === id);
    }
}
