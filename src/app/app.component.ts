import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-project';
}
