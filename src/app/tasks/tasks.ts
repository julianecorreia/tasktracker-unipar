import {Component, Input} from '@angular/core';
import {TasksService} from './task.service';
import {TaskUnit} from './task/task';
import {NewTask} from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskUnit,
    NewTask
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name!: string;
  isAddingTask = false;

  //injeta a dependência de TasksService
  constructor(private tasksService: TasksService) {
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
