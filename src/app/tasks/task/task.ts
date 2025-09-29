import {Component, inject, Input} from '@angular/core';
import {Card} from '../../shared/card/card';
import {TasksService} from '../task.service';
import {Task} from '../task.model';

@Component({
  selector: 'app-task',
  imports: [
    Card
  ],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class TaskUnit {
  @Input({required: true}) task!: Task;

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

}
