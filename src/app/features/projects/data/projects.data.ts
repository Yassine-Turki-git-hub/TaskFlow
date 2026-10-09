import {ProjectModel} from '../models/project.model';
import {TypeStatus} from '../models/type-status';
import {TypePriority} from '../models/type-priority';
export const PROJECTS_DATA : ProjectModel[] = [
    {
        id: 1,
        name: 'Projet 1',
        description: 'Description du projet 1',
        status: TypeStatus.EnCours,
        tasks: [
            {
                id: 1,
                title: 'Tâche 1',
                priority: TypePriority.Haute,
                status: TypeStatus.EnAttente
            },
            {
                id: 2,
                title: 'Tâche 2',
                priority: TypePriority.Moyenne,
                status: TypeStatus.EnCours
            }
        ]
    },
    {
        id: 2,
        name: 'Projet 2',
        description: 'Description du projet 2',
        status: TypeStatus.EnAttente,
        tasks: [
            {
                id: 1,
                title: 'Tâche 1',
                priority: TypePriority.Moyenne,
                status: TypeStatus.Termine
            },
            {
                id: 2,
                title: 'Tâche 2',
                priority: TypePriority.Basse,
                status: TypeStatus.EnCours
            },
            {
                id: 3,
                title: 'Tâche 3',
                priority: TypePriority.Haute,
                status: TypeStatus.EnAttente
            }
        ]
    },
    {
        id: 3,
        name: 'Projet 3',
        description: 'Description du projet 3',
        status: TypeStatus.Termine,
        tasks: [
            {
                id: 1,
                title: 'Tâche 1',
                priority: TypePriority.Moyenne,
                status: TypeStatus.EnAttente
            },
            {
                id: 2,
                title: 'Tâche 2',
                priority: TypePriority.Basse,
                status: TypeStatus.EnCours
            },
            {
                id: 3,
                title: 'Tâche 3',
                priority: TypePriority.Haute,
                status: TypeStatus.EnAttente
            },
            {
                id: 4,
                title: 'Tâche 4',
                priority: TypePriority.Haute,
                status: TypeStatus.EnCours
            }
        ]
    }

]