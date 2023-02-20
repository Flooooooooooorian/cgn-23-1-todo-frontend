import "./TodoCard.css"
import {Todo} from "../model/Todo";

type Props = {
    todo: Todo
}

export default function TodoCard(props: Props) {

    return <div className="todo-card">
        <h5>{props.todo.description}</h5>
        <p>{props.todo.status}</p>
        <p>{props.todo.id}</p>
    </div>
}
