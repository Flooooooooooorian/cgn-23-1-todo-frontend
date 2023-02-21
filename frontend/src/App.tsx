import React from 'react';
import './App.css';
import TodoBoards from "./components/TodoBoards";
import AddTodo from "./components/AddTodo";
import useTodos from "./hooks/useTodos";
import axios from "axios";

function App() {

    const { todo, addTodo, updateTodo } = useTodos()

    // function deleteTodo(id: string) {
    //     setTodos([...todos])
    // }

    return (
        <div className="App">
            <AddTodo onAdd={addTodo}/>
            <TodoBoards todos={todos} updateTodo={updateTodo}/>
        </div>
    );
}

export default App;
