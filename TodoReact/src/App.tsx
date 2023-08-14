import { useState } from 'react';
import './App.css'
import { AddTodo } from './components/AddTodo';
import { Todos } from './components/Todos';
import { Todo } from './models/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Handla", false, 1),
    new Todo("Promenad", false, 2)
    ]);

  const addTodo = (textFromUser: string): void => {
    setTodos([...todos, new Todo(textFromUser, false, Date.now())]);
    //Date.now bra att ha som id då det är milisekunder utifrån viss mättid.
    //Stort tal men kommer inte hinna bli samma som ett annat tal. 
  }

  const toggleTodo = (selectedId: number) => {
    setTodos(todos.map((todo) => {
      if(todo.id === selectedId) {
        todo.done = !todo.done;
        return todo;
      } else {
        return {...todo};
      }
    }))
  }

  const removeTodo = (selectedId: number) => {
    setTodos(todos.filter((todo) => todo.id !== selectedId));
  }

  return (
    <>
      <AddTodo createTodo={addTodo}></AddTodo>
      <Todos todoList={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}></Todos>
      //Komponenten Todos ska få en todolist med todos som är härovan. 
    </>
  );
}

export default App
