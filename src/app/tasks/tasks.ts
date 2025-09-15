import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name!: string;
  isAddingTask = false;

}
