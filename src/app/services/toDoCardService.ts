import { Injectable } from "@angular/core";
import { ToDoCard } from "../models/toDoCard";

@Injectable({providedIn: "root"})
export class ToDoCardService{
    toDoCards: ToDoCard[] = [
        new ToDoCard("Comprare latte", "Andare al supermercato e prendere il latte", 1, "2025-06-01"),
        new ToDoCard("Studiare Java", "Leggere il capitolo sugli stream", 2, "2025-06-05"),
        new ToDoCard("Allenamento", "Palestra ore 18", 3, "2025-06-02"),
        new ToDoCard("Dentista", "Appuntamento alle 10:00", 1, "2025-06-03"),
        new ToDoCard("Scrivere articolo", "Finire il post sul principio SOLID", 2, "2025-06-04")
    ];
    
    getToDoCards(): ToDoCard[]{
        return this.toDoCards;
    }
}