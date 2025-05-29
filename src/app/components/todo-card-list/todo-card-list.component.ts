import { Component, OnInit } from '@angular/core';
import { TodoCard } from '../../models/todoCard';
import { TodoCardService } from '../../services/todoCardService';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'app-todo-card-list',
  imports: [TodoCardComponent],
  templateUrl: './todo-card-list.component.html',
  styleUrl: './todo-card-list.component.css'
})
export class TodoCardListComponent implements OnInit{
  todoCards: TodoCard[] = [];  
  constructor(private _todoCardService: TodoCardService){
  }
  ngOnInit(): void {
    this.todoCards = this._todoCardService.getToDoCards();
  }
  handleDelete(id: number){
    const wasDeleted = this._todoCardService.delete(id);
    if(wasDeleted){
      alert("Il todo con id:")
    }
  }
}
