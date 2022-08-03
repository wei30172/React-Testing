import React from "react";
import { TodoList } from "../../features";
import "./Todo.scss";

const Todo = () => {
  return (
    <main className="todo-page">
      <TodoList />
    </main>
  );
};

export default Todo;
