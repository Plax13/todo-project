import { Injectable } from "@angular/core";
import { ToDoCard } from "../models/toDoCard";

@Injectable({providedIn: "root"})
export class ToDoCardService{
    toDoCards: ToDoCard[] = [];
    createToDo(obj: ToDoCard): void{
        this.toDoCards.push(obj);
        console.log(this.toDoCards);
    }
    getToDoCards(): ToDoCard[]{
        return this.toDoCards;
    }
}