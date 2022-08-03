import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { todosApi } from "../../api/todosApi";
import { TodoType } from "../../types/todos.type";
import "./TodoList.scss";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    await todosApi
      .get("/")
      .then(({ data }) => setTodos(data))
      .catch((error) => console.log(error));
  };

  const addTodo = async (newTodo: TodoType) => {
    setTimeout(() => {
      setTodos((todos) => [newTodo, ...todos]);
    }, 500);
  };

  const updateTodo = async (updatedTodo: TodoType) => {
    const { completed } = updatedTodo;
    setTodos((prevTodos) => {
      let updatedTodos = [...prevTodos].map((todo) => {
        if (todo.id === updatedTodo.id) {
          return { ...todo, completed };
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  const deleteTodo = async (id: number) => {
    setTodos((prevTodos) => {
      let updatedTodos = [...prevTodos].filter((todo) => todo.id !== id);
      return updatedTodos;
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      userId: 1,
      id: Math.floor(Math.random() * (1000 - 201) + 201),
      title: newTodo,
      completed: false,
    });
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit} className="flex">
      <label htmlFor="new-todo" />
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter New Todo"
        />
      </div>
      <button className="submit cursor-pointer">✚</button>
    </form>
  );
  return (
    <main>
      <h1>Todo List</h1>
      <p>Total Todos: {todos.length}</p>
      <p>Completed Todos: {todos.filter((todo) => todo.completed).length}</p>
      {newItemSection}
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            todo={todo}
          />
        ))}
    </main>
  );
};

export default TodoList;
