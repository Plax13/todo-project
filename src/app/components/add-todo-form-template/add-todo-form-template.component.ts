import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoCard } from '../../models/todoCard';
import { Router } from '@angular/router';
import { TodoCardService } from '../../services/todoCardService';

@Component({
  selector: 'app-add-todo-form-template',
  imports: [FormsModule],
  templateUrl: './add-todo-form-template.component.html',
  styleUrl: './add-todo-form-template.component.css'
})
  
export class AddTodoFormTemplateComponent {
  private _service = inject(TodoCardService);
  private _router = inject(Router);
  todoCard: Partial<TodoCard> = {
    title: "",
    description: "",
    categoryId: 1,
    deadline: ""
  }

  addTodo() {
    this._service.add(this.todoCard).subscribe({
      next: todoCard => {
        alert(`Todo card saved with id ${todoCard.todoId}`);
        this._router.navigate(['/todo-list']);
      },
      error: e => alert('Failed to save the new todo card')
    });
  }
}
