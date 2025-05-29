import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoCard } from '../../models/todoCard';
import { TodoCardService } from '../../services/todoCardService';
import { Router } from '@angular/router';

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
    this._service.add(this.todoCard);
    this._router.navigate(["/todo-list"]);
  }
}
