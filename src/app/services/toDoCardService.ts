import { inject, Injectable } from "@angular/core";
import { TodoCard } from "../models/todoCard";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class TodoCardService{
    private _http = inject(HttpClient);
    private _url = 'http://localhost:8080/api/todos';

    findAll(): Observable<TodoCard[]> {
        return this._http.get<TodoCard[]>(this._url);
    }

    delete(id: number): Observable<void> {
        return this._http.delete<void>(`${this._url}/${id}`);
    }

    add(todoCard: Partial<TodoCard>): Observable<TodoCard>{
        return this._http.post<TodoCard>(this._url, todoCard);
    }
}