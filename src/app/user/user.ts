import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [
    Card
  ],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) user!: UserInteface;
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
