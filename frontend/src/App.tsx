import React from 'react';
import './App.css';
import TodoBoards from "./components/TodoBoards";
import AddTodo from "./components/AddTodo";
import useTodos from "./hooks/useTodos";

function App() {

    const {todos, addTodo, updateTodo} = useTodos()

    return (
        <div className="App">
            <AddTodo onAdd={addTodo}/>
            <TodoBoards todos={todos} updateTodo={updateTodo}/>
        </div>
    );
}

export default App;
