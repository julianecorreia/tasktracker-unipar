import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {TasksService} from '../task.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private taskService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onAddTask() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    }, this.userId);
    this.close.emit();
  }
}
