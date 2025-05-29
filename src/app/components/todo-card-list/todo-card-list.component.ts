import { Component, inject, OnInit } from '@angular/core';
import { TodoCard } from '../../models/todoCard';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { TodoCardService } from '../../services/todoCardService';

@Component({
  selector: 'app-todo-card-list',
  imports: [TodoCardComponent],
  templateUrl: './todo-card-list.component.html',
  styleUrl: './todo-card-list.component.css'
})
export class TodoCardListComponent implements OnInit {
  todoCards: TodoCard[] = [];
  private _todoCardService = inject(TodoCardService);

  ngOnInit(): void {
    this.loadTodoCards();
  }
 
  handleDelete(id: number): void {
    this._todoCardService.delete(id).subscribe({
      next: () => {
        alert(`Todo card with id ${id} was deleted`);
        this.todoCards = this.todoCards.filter(todo => todo.todoId != id);
      },
      error: e => {
        alert('Failed to delete student with id ' + id);
        this.loadTodoCards();
      }
    });
  }

  loadTodoCards(): void {
    this._todoCardService.findAll().subscribe({
      next: todoCards => this.todoCards = todoCards,
      error: e => {
        alert(e);
        console.log("Failed to load todo cards: " + e);
      }
    });
  }
}
