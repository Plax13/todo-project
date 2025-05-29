import { Routes } from '@angular/router';
import { TodoCardListComponent } from './components/todo-card-list/todo-card-list.component';
import { HomeComponent } from './components/home/home.component';
import { AddTodoFormTemplateComponent } from './components/add-todo-form-template/add-todo-form-template.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "todo-list", component: TodoCardListComponent },
    { path: "add-todo-form", component: AddTodoFormTemplateComponent }
];
