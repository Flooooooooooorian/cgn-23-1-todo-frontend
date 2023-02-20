import React, {useEffect, useState} from 'react';
import './App.css';
import {NewTodo, Todo} from "./model/Todo";
import axios from "axios";
import TodoBoards from "./components/TodoBoards";
import AddTodo from "./components/AddTodo";

function App() {

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        loadAllTodos()
    }, [])

    function loadAllTodos() {
        return axios.get("/api/todo")
            .then(response => response.data)
            .then(setTodos)
            .catch(console.error)
    }

    function addTodo(todo: NewTodo) {
        return axios.post("/api/todo", todo)
            .then(response => response.data)
            .then(data => setTodos(prevState => [...prevState, data]))

    }

    return (
        <div className="App">
            <AddTodo onAdd={addTodo}/>
            <TodoBoards todos={todos}/>
        </div>
    );
}

export default App;
