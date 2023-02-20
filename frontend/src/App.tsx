import React, {useEffect, useState} from 'react';
import './App.css';
import {Todo} from "./model/Todo";
import axios from "axios";
import TodoBoards from "./components/TodoBoards";

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

    return (
        <div className="App">
            <TodoBoards todos={todos}/>
        </div>
    );
}

export default App;
