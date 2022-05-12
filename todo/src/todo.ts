class Todo{
    private _nazwa:string;
    private _wykonane:boolean;
    static licznik:number =0;
    public constructor (nazwa:string){
        this._nazwa = nazwa;
        this._wykonane = false;
        Todo.licznik++;
    }   
    get nazwa(){
        return this._nazwa;
    } 
    get wykonane(){
        return this._wykonane;
    }
    set nazwa(value){
        this._nazwa = value;
    }
    set wykonane(value){
        this._wykonane = value;
    }

}

const rzecz1: Todo =new Todo("Podlać kwiatki");
rzecz1.wykonane=true;
console.log(rzecz1.nazwa);
console.log(Todo.licznik);
const rzecz2:Todo = new Todo("Karmić psa");
console.log(rzecz2.nazwa);
console.log(Todo.licznik);
