import React from "react";
import { ButtonWrapper } from "../../components";
import { TodoType } from "../../types/todos.type";
import "./TodoItem.scss";

type Props = {
  todo: TodoType;
  updateTodo: (todo: TodoType) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
};

const TodoItem: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <article>
      <div data-cy={`todo-${todo.title}`} className="todo">
        <input
          type="checkbox"
          id={`${todo.id}`}
          checked={todo.completed}
          onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
        />
        <label htmlFor={`${todo.id}`}>{todo.title}</label>
        <ButtonWrapper
          title={`❌`}
          className="delete cursor-pointer"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </article>
  );
};

const areEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.todo.id === nextProps.todo.id &&
    prevProps.todo.completed === nextProps.todo.completed
  );
};

const memorizedTodoItem = React.memo(TodoItem, areEqual);

export default memorizedTodoItem;
