import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoCard } from '../../models/todoCard';

@Component({
  selector: 'app-todo-card',
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {
  @Input('todoCard') todoCard!: TodoCard;
  @Output('deleteTodo') deleteTodo = new EventEmitter<number>(); 
  onDelete(){
    this.deleteTodo.emit(this.todoCard.cardId);
  }
}
