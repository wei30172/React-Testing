import React from "react";
import { TodoType } from "../../types/todos.type";
import "./TodoCard.scss";
import DoneOutlineOutlinedIcon from "@material-ui/icons/DoneOutlineOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

interface IProps {
  todo: TodoType;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

function TodoCard({ todo, setTodos, todos }: IProps) {
  return (
    <div
      className="todoCard"
      data-cy={`todo-${todo.title}`}
      onClick={() => {
        let newTodos = todos.map((updatedTodo) => {
          if (updatedTodo._id === todo._id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else return updatedTodo;
        });
        setTodos(newTodos);
      }}
    >
      <div className="todoCard_completion">
        {todo.completed ? (
          <DoneOutlineOutlinedIcon className="todoCard_completion_done" />
        ) : (
          <CloseOutlinedIcon />
        )}
      </div>
      <div className="todoCard_todo">{todo.title}</div>
    </div>
  );
}

export default TodoCard;
