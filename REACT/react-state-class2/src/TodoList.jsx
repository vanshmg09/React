import { useState } from "react"



export default function TodiList(){
    let [todos, setTodos] = useState(["sample task"])
    let [newTodo, setNewTodo] = useState("")

    let addNewTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("")
    }

let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
}
    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            <br />
            <button onClick={addNewTodo}>Add Task</button>
            <br /><br />
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    )
}