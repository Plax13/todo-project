export interface TodoCard{
    cardId: number;
    title: string;
    description : string;
    categoryId: number;
    deadline: string;
    done: boolean;
    creationDate: string;
    completionDate: string | null;
}  
