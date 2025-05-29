export interface TodoCard{
    todoId: number;
    title: string;
    description : string;
    categoryId: number;
    deadline: string | null;
    done: boolean;
    creationDate: string;
    completionDate: string | null;
}  
