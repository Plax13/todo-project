import { Component, Input } from '@angular/core';
import { ToDoCard } from '../../models/toDoCard';

@Component({
  selector: 'app-todo-card',
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {
  @Input('todoCard') todoCard!: ToDoCard;

}
