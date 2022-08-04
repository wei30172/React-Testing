import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoList } from "../../features";
import { ButtonWrapper } from "../../components";
import "./Todos.scss";

const Todo = () => {
  const navigate = useNavigate();
  const [authenticated] = useState(true);
  return (
    <main className="todo-page">
      {!authenticated ? (
        <>
          <h1>Please login to continue</h1>
          <ButtonWrapper
            className="btn"
            title="go to login page"
            onClick={() => navigate("/login")}
          />
        </>
      ) : (
        <TodoList />
      )}
    </main>
  );
};

export default Todo;
