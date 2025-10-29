import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodiList(){
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false}])
    let [newTodo, setNewTodo] = useState("")

    let addNewTodo = () => {
        setTodos((prevTodo) => {
            return [...prevTodo, {task:newTodo, id: uuidv4(), isDone: false}]
        });
        setNewTodo("")
    }

let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
}

let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id != id))

}

let upperCaseAll = () =>{
    setTodos( (prevTodos) => prevTodos.map((todo) => {
        return{
            ...todo,
            task: todo.task.toUpperCase()
            }
        }
        )
    )
}

let upperCaseOne = (id) =>  {
    setTodos( (prevTodos) => prevTodos.map((todo) => {
        if(todo.id == id){
            return{
            ...todo,
            task: todo.task.toUpperCase()
            }
        }else{
            return todo;
        }
        }
        
        )
    )
}

let markAsDone = (id) => {
    setTodos( (prevTodos) => prevTodos.map((todo) => {
        if(todo.id == id){
            return{
            ...todo,
            isDone : true
            }
        }else{
            return todo;
        }
        }
        
        )
    )
}

let markAsDonneAll = () =>{
    setTodos( (prevTodos) => prevTodos.map((todo) => {
        return{
            ...todo,
            isDone: true
            }
        }
        )
    )
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
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>
                            {todo.task}
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => upperCaseOne(todo.id)}>Uppercace One</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
            <br />

            <button onClick={upperCaseAll}>Uppercase All</button>
            <br /> <br />
            <button onClick={markAsDonneAll}>Mark As Done All</button>
        </div>
    )
}