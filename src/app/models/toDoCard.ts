export class ToDoCard{
    private static counter: number = 0;
    private cardId: number;
    private creationDate: string;
    private done: boolean;
    private completionDate: string | null;

    constructor( 
        private title: string,
        private description : string,
        private categoryId: number,
        private deadline: string
    ){
        this.cardId = ToDoCard.counter;
        ToDoCard.counter++; 
        this.creationDate = new Date().toISOString().split("T")[0];
        this.done = false;
        this.completionDate = null;
    }
}  
