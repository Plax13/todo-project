import { Injectable } from "@angular/core";
import { TodoCard } from "../models/todoCard";

@Injectable({providedIn: "root"})
export class TodoCardService{
    todoCards: TodoCard[] = [
        {
            cardId: 1,
            title: "Comprare la spesa",
            description: "Acquistare frutta, verdura e latte",
            categoryId: 1,
            deadline: "2025-06-01T18:00:00Z",
            done: false,
            creationDate: "2025-05-29T10:00:00Z",
            completionDate: null
        },
        {
            cardId: 2,
            title: "Allenamento in palestra",
            description: "Sessione di allenamento gambe e cardio",
            categoryId: 1,
            deadline: "2025-05-30T20:00:00Z",
            done: true,
            creationDate: "2025-05-28T09:00:00Z",
            completionDate: "2025-05-28T19:30:00Z"
        },
        {
            cardId: 3,
            title: "Riordinare la scrivania",
            description: "Pulire, ordinare documenti e buttare ciò che non serve",
            categoryId: 2,
            deadline: "2025-05-31T12:00:00Z",
            done: false,
            creationDate: "2025-05-27T14:00:00Z",
            completionDate: null
        },
        {
            cardId: 4,
            title: "Inviare email al cliente",
            description: "Rispondere alle richieste del progetto",
            categoryId: 3,
            deadline: "2025-05-29T16:00:00Z",
            done: true,
            creationDate: "2025-05-29T08:30:00Z",
            completionDate: "2025-05-29T09:45:00Z"
        },
        {
            cardId: 5,
            title: "Studiare TypeScript",
            description: "Leggere documentazione ufficiale e fare esercizi",
            categoryId: 2,
            deadline: "2025-06-02T22:00:00Z",
            done: false,
            creationDate: "2025-05-26T17:00:00Z",
            completionDate: null
        }
    ];
    
    getToDoCards(): TodoCard[]{
        return this.todoCards;
    }

    delete(id: number): boolean{
        const lenBefore = this.todoCards.length;
        this.todoCards = this.todoCards.filter(tc => tc.cardId != id);
        return lenBefore != this.todoCards.length;
    }
}