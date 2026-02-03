import {Routes} from '@angular/router';
import { TaskList } from './components/task-list/task-list'; // Import auto


export const routes: Routes = [
  { path: '', component: TaskList }, // Chemin vide = page d'accueil
];

