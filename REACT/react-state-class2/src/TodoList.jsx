import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodiList(){
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4()}])
    let [newTodo, setNewTodo] = useState("")

    let addNewTodo = () => {
        setTodos([...todos, {task:newTodo, id: uuidv4()}]);
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
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    )
}