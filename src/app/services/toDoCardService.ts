import { Injectable } from "@angular/core";
import { TodoCard } from "../models/todoCard";

@Injectable({providedIn: "root"})
export class TodoCardService{
    lastId: number = 1;
    todoCards: TodoCard[] = [];
    
    getToDoCards(): TodoCard[]{
        return this.todoCards;
    }

    delete(id: number): boolean{
        const lenBefore = this.todoCards.length;
        this.todoCards = this.todoCards.filter(tc => tc.cardId != id);
        return lenBefore != this.todoCards.length;
    }

    add(partialTodo: Partial<TodoCard>) {
        const { title, description, categoryId, deadline } = partialTodo;
        const todo: TodoCard = {
            cardId: this.lastId,
            title: title!,
            description: description!,
            categoryId: categoryId!,
            deadline: deadline!,
            done: false,
            completionDate: "",
            creationDate: new Date().toISOString().split("T")[0]
        };
        this.todoCards.push(todo);
        this.lastId++;
    }
}