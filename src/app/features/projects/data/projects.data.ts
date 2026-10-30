import {ProjectModel} from '../models/project.model';
import {TypeStatus} from '../models/type-status';
import {TypePriority} from '../models/type-priority';
export const PROJECTS_DATA : ProjectModel[] = [
    {
        id: 1,
        name: 'refonte du site web',
        description: 'Description du projet 1',
        status: TypeStatus.EnCours,
        startDate: '2026-05-30',
        budget: 15000,
        tasks: [
            {
                id: 1,
                title: 'Tâche 1',
                priority: TypePriority.Haute,
                status: TypeStatus.Termine,
                dueDate:'2026-09-10',
                description: 'Créer les maquettes haute fidélité de la page d’accueil pour validation par le client avant l’intégration.'
            },
            {
                id: 2,
                title: 'Tâche 2',
                priority: TypePriority.Moyenne,
                status: TypeStatus.Termine,
                dueDate: '2026-09-20'
            },
            {
                id: 3,
                title: 'Tâche 3',
                priority: TypePriority.Haute,
                status: TypeStatus.EnCours,
                dueDate:'2026-10-02',
                description: 'Développer le formulaire de contact avec validation des champs et envoi de la demande vers l’équipe support.'
            },
            {
                id: 4,
                title: 'Tâche 4',
                priority: TypePriority.Haute,
                status: TypeStatus.EnAttente,
                dueDate:'2026-10-30'
            },
            {
                id: 5,
                title: 'Tâche 5',
                priority: TypePriority.Haute,
                status: TypeStatus.EnAttente,
                dueDate:'2026-11-15',
                description: 'Tester l’affichage sur mobile et tablette.'
            },
            {
                id: 6,
                title: 'Tâche 6',
                priority: TypePriority.Haute,
                status: TypeStatus.Termine,
                dueDate:'2026-09-15'
            },
            {
                id: 7,
                title: 'Tâche 7',
                priority: TypePriority.Haute,
                status: TypeStatus.EnAttente,
                dueDate:'2026-10-25',
                description: 'Mettre en place l’authentification des utilisateurs sur l’application mobile avec gestion de la session.'
            },
            {
                id: 8,
                title: 'Tâche 8',
                priority: TypePriority.Haute,
                status: TypeStatus.EnCours,
                dueDate:'2026-10-01'
            },
            {
                id: 9,
                title: 'Tâche 9',
                priority: TypePriority.Haute,
                status: TypeStatus.EnAttente,
                description: '(aucune) — tâche sans échéance et non assignée'
            },
            {
                id: 10,
                title: 'Tâche 10',
                priority: TypePriority.Haute,
                status: TypeStatus.Termine,
                dueDate:'2026-09-05'
            },
            {
                id: 11,
                title: 'Tâche 11',
                priority: TypePriority.Haute,
                status: TypeStatus.Termine,
                dueDate:'2026-09-25'
            },
            {
                id: 12,
                title: 'Tâche 12',
                priority: TypePriority.Haute,
                status: TypeStatus.EnAttente,
                dueDate:'2026-10-20',
                description: 'Vérifier la cohérence des données migrées en comparant les volumes et les contenus avec l’ancien serveur.'
            }
        ]
    },
    {
        id: 2,
        name: 'Projet 2',
        description: 'Description du projet 2',
        status: TypeStatus.EnAttente,
        startDate: '2027-12-01',
        budget: 15000,
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
                status: TypeStatus.EnAttente
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
        startDate: '2021-05-30',
        budget: 20000,
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
                status: TypeStatus.Termine
            },
            {
                id: 3,
                title: 'Tâche 3',
                priority: TypePriority.Haute,
                status: TypeStatus.Termine
            },
            {
                id: 4,
                title: 'Tâche 4',
                priority: TypePriority.Haute,
                status: TypeStatus.Termine
            }
        ]
    }

]