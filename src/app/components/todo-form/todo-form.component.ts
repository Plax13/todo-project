import { Component, input } from '@angular/core';
import { ToDoCardService } from '../../services/toDoCardService';
import { ToDoCard } from '../../models/toDoCard';

@Component({
  selector: 'app-todo-form',
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  constructor(private _toDoCardService: ToDoCardService){
  }
  createToDo(){
    const title: HTMLInputElement | null = document.querySelector("#title");
    const description: HTMLInputElement | null = document.querySelector("#description");
    const category: HTMLSelectElement | null = document.querySelector("#category");
    const deadline: HTMLInputElement | null = document.querySelector("#deadline");
    const toDoCard = new ToDoCard(title!.value, description!.value, Number(category!.value), deadline!.value);
    this._toDoCardService.createToDo(toDoCard);
  }
}
