import { Todo } from "../models/Todo";
import "./Todos.css";
import { ShowTodo } from "./showTodo";

interface ITodoProps {
    todoList:Todo[];
    toggleTodo: (id:number) => void;
    removeTodo: (id:number) => void;
}


export const Todos = ({todoList, toggleTodo, removeTodo}: ITodoProps) => {     
    //{}Tar ut varabeln direkt och skriver inte props. 
    //Lägger span runt texten för att styla denna med krav. 
    const lis = todoList.map((todo, i) => 
        <li key={i}>
            <ShowTodo todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        </li>);

    return <ul>{lis}</ul>;
};