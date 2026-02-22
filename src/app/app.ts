import { Header } from './header/header';
import { Component, signal } from '@angular/core';
import { User } from './user/user';

// DECORATOR - ADDS METADATA AND CONFIG TO CLASSES (AND OTHER THINGS)
@Component({
  selector: 'app-root',
  imports: [
    Header,
    User
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
}
