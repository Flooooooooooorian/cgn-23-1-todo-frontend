import {ChangeEvent, useState} from "react";
import {NewTodo} from "../model/Todo";

type Props = {
    onAdd: (todo: NewTodo) => Promise<void>
}

export default function AddTodo(props: Props) {

    const [description, setDescription] = useState<string>("")

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value)
    }

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        console.log(event)
        const newTodo: NewTodo = {description, status: "open"}
        props.onAdd(newTodo)
            .then(r => setDescription(""))
    }

    return <form onSubmit={onSave}>
        <input value={description} onChange={onChange} placeholder="Description"/>
        <button type='submit'>Save</button>
    </form>
}
