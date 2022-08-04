import { useState } from "react";
import { InputWrapper, ButtonWrapper } from "../../components";
import { TodoType } from "../../types/todos.type";
import { Modal } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import "./TodoModal.scss";

interface IProps {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const formInputs = [
  {
    id: 1,
    label: "Todo",
    errorMessage: "Required!",
    name: "todo",
    type: "text",
    placeholder: "Todo",
    required: true,
    value: "",
  },
];

function AddModal({ todos, setTodos }: IProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [todo, setTodo] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setTodo(target.value);
  };

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          _id: Math.floor(Math.random() * (1000 - 201) + 201),
          title: todo,
          completed: false,
        },
      ]);
      setShow(false);
      setTodo("");
    }
  };

  return (
    <>
      <ButtonWrapper
        className="btn"
        id="todo-add-btn"
        title="Add"
        onClick={handleShow}
      />
      <Modal className="todo-modal" open={show} onClose={handleClose}>
        <>
          <div className="todo-form">
            <form onSubmit={handleAdd}>
              <h2>Add a new todo</h2>
              {formInputs.map(
                ({ id, name, label, errorMessage, ...inputProps }) => (
                  <div key={id} className="form-input">
                    <label>{label}</label>
                    <br />
                    <InputWrapper
                      {...inputProps}
                      name={name}
                      value={todo}
                      handleChange={handleChange}
                    />
                    <p data-testid={`error-${name}`}>
                      <ErrorIcon />
                      {errorMessage}
                    </p>
                  </div>
                ),
              )}
              <div className="flex">
                <ButtonWrapper
                  className="btn"
                  title="Close"
                  onClick={handleClose}
                />
                <ButtonWrapper
                  disabled={!todo}
                  className="btn"
                  type="submit"
                  title="Save"
                />
              </div>
            </form>
          </div>
        </>
      </Modal>
    </>
  );
}

export default AddModal;
