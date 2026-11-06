import { Component, signal } from '@angular/core';
import { ProjectList } from './features/projects/components/project-list/project-list';

@Component({
  imports: [ProjectList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TaskFlow');
}
