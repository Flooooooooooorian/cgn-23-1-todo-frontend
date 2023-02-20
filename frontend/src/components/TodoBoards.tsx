import "./TodoBoards.css"
import {Todo} from "../model/Todo";
import TodoBoard from "./TodoBoard";

type Props = {
    todos: Todo[]
}

export default function TodoBoards(props: Props) {

    const openTodos = props.todos.filter(todo => todo.status === "OPEN")
    const inProgressTodos = props.todos.filter(todo => todo.status === "IN_PROGRESS")
    const doneTodos = props.todos.filter(todo => todo.status === "DONE")

    return <div className="todo-boards">
        <TodoBoard todos={openTodos} title={"Open"}/>
        <TodoBoard todos={inProgressTodos} title="Doing"/>
        <TodoBoard todos={doneTodos} title={"Done"}/>
    </div>
}
