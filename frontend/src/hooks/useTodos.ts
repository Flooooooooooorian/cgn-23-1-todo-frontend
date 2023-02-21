import {useEffect, useState} from "react";
import {NewTodo, Todo} from "../model/Todo";
import axios from "axios";


export default function useTodos() {

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

    function updateTodo(todo: Todo) {
        axios.put("/api/todo/" + todo.id, todo)
            .then(response => response.data)
            .then(data =>  setTodos(prevState => {
                return prevState.map(currentTodo => {
                    if (currentTodo.id === todo.id) {
                        return data
                    }
                    return currentTodo
                })
            }))
    }




    return {todos, addTodo, updateTodo}
}
