import { Component, OnInit } from '@angular/core';
import { ToDoCard } from '../../models/toDoCard';
import { ToDoCardService } from '../../services/toDoCardService';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'app-todo-card-list',
  imports: [TodoCardComponent],
  templateUrl: './todo-card-list.component.html',
  styleUrl: './todo-card-list.component.css'
})
export class TodoCardListComponent implements OnInit{
  todoCards: ToDoCard[] = [];  
  constructor(private _todoCardService: ToDoCardService){
  }
  ngOnInit(): void {
    this.todoCards = this._todoCardService.getToDoCards();
  }
}
