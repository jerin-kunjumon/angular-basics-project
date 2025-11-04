import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from './profile.compnent';
import CounterComponent from './Counter/Counter.component';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, ProfileComponent, CounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-basics');
  counter: number = 20;
}
