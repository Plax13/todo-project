export class ToDoCard{
    private static counter: number = 0;
    private _cardId: number;
    private _creationDate: string;
    private _done: boolean;
    private _completionDate: string | null;

    constructor( 
        private _title: string,
        private _description : string,
        private _categoryId: number,
        private _deadline: string
    ){
        this._cardId = ToDoCard.counter;
        ToDoCard.counter++; 
        this._creationDate = new Date().toISOString().split("T")[0];
        this._done = false;
        this._completionDate = null;
    }

    get cardId(){
        return this._cardId;
    }

    get title(){
        return this._title;
    }
    get description(){
        return this._description;
    }
    get categoryId(){
        return this._categoryId;
    }
    get deadline(){
        return this._deadline;
    }
    get creationDate(){
        return this._creationDate;
    }
    get done(){
        return this._done;
    }
    get completionDate(){
        return this._completionDate;
    }
}  
