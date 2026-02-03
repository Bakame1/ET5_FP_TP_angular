import { Injectable } from '@angular/core';
import {Task} from '../models/task_model';
@Injectable({
  providedIn: 'root' // Rend ce service disponible partout (Singleton)
})
export class TaskService {
  // On déplace la liste ici (private pour encapsuler)
  private tasks: Task[] = [
    { id: 1, title: 'Apprendre Angular', completed: false },
    { id: 2, title: 'Faire le TP', completed: true },
    { id: 3, title: 'Dormir', completed: false }
  ];

  // Méthode pour récupérer les tâches
  getTasks(): Task[] {
    return this.tasks;
  }

  // Méthode pour ajouter (on reçoit l'objet complet ou juste le titre, au choix. Suivons le PDF :)
  addTask(task: Task): void {
    this.tasks.push(task);
  }

  // Méthode pour toggle
  toggleTask(task: Task): void {
    task.completed = !task.completed;
  }

  deleteTask(id: number): void {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1); // Retire 1 élément à l'index trouvé
    }
  }
}
