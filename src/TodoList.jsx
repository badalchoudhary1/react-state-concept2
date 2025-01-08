import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos,setTodos]=useState([{task:"Sample-task",id:uuidv4()}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask =()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4()}];
        });
        setNewTodo("");
        
    };
    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value);
        
    };
    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id));
        
    };  
    let upperCaseAll =()=>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
                return {
                    ...todo,task:todo.task.toUpperCase(),
                };
            })
        ));
    };
    let upperCaseOne=(id)=>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
                if (todo.id == id){
                    return {
                        ...todo,task:todo.task.toUpperCase(),
                    };  
                }
              else{
                return todo;
              }
            })
        ));
        
    }

    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br />

            <h2>Todo List</h2>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                    <span>{todo.task}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => upperCaseOne(todo.id)}>upperCase one</button>
                    </li>
                ))}
            </ul>
            <button onClick={upperCaseAll}>upperCase all</button>
        </div>
    );
}