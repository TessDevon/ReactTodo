import { Todo } from "../models/Todo";

interface IShowTodoProps {
    todo: Todo;
    toggleTodo: (id:number) => void;
    removeTodo: (id:number) => void;
}

export const ShowTodo = ({todo, toggleTodo,removeTodo}:IShowTodoProps) => {
    return (
        <>
            <span className={todo.done ? "done" : ""}>{todo.text}</span> 
            <button onClick={() => toggleTodo(todo.id)}>Toggla</button> 
            <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
        </>
    );
    
}