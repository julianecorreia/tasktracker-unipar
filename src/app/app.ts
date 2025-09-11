import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {User} from './user/user';
import {Tasks} from './tasks/tasks';
import {DUMMY_USERS} from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task & Tracker Unipar');

  users = DUMMY_USERS;
  selectedUserId?: string; //usar mais tarde pra selecionar o usuario

  get selectedUser() {
    return this.users.find(user =>
      user.id === this.selectedUserId)!;
  }

}
