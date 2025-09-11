import {Component, Input} from '@angular/core';
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

}
