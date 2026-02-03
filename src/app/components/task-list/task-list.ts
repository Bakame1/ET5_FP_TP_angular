import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from '../../models/task_model'; // Important pour *ngFor
import { FormsModule } from '@angular/forms';
import {TaskService} from '../../services/task_service';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks: Task[] = [];
  newTaskTitle: string = '';

  // 2. Injection du service via le constructeur
  constructor(private taskService: TaskService) {
    // 3. On récupère les données dès la construction
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      // On prépare l'objet
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle,
        completed: false
      };

      // 4. On délègue l'ajout au service
      this.taskService.addTask(newTask);

      this.newTaskTitle = '';
    }
  }

  toggleTask(task: Task) {
    // 5. On délègue la modification au service
    this.taskService.toggleTask(task);
  }
}
