import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== id)
    );
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  return (
    <div className="todo-container">
      <h2 className="title">Todo List</h2>
      <div className="input-container">
        <input
          placeholder="Add a task"
          value={newTodo}
          onChange={updateTodoValue}
          className="input"
        />
        <button onClick={addNewTask} className="btn add-btn">
          Add Task
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.isDone ? "done" : ""}`}>
            <span>{todo.task}</span>
            <div className="actions">
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn delete-btn"
              >
                Delete
              </button>
              <button
                onClick={() => upperCaseOne(todo.id)}
                className="btn uppercase-btn"
              >
                Uppercase
              </button>
              <button
                onClick={() => markAsDone(todo.id)}
                className="btn done-btn"
              >
                Done
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="bulk-actions">
        <button onClick={upperCaseAll} className="btn bulk-btn">
          Uppercase All
        </button>
        <button onClick={markAsAll} className="btn bulk-btn">
          Mark All as Done
        </button>
      </div>
    </div>
  );
}
