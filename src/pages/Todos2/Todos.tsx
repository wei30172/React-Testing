import React, { useState } from "react";
import { TodoCard, TodoModal } from "../../features";
import { TodoType } from "../../types/todos.type";
import "./Todos.scss";

function Todos() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <div className="todos">
      <div className="todos_header">
        <h2>Todos Checklist</h2>
        <TodoModal todos={todos} setTodos={setTodos} />
      </div>
      <div className="todos_cards">
        {todos.map((todo) => {
          return (
            <TodoCard
              key={todo._id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
