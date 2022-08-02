import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputWrapper } from "../../components";
import ErrorIcon from "@material-ui/icons/Error";
import "./Login.scss";

export interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState<LoginValues>({
    email: "",
    password: "",
  });

  const formInputs = [
    {
      id: "1",
      label: "Email",
      errorMessage: "Email should be a valid email address!",
      name: "email",
      type: "email",
      placeholder: "Email",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
      required: true,
      value: "",
    },
    {
      id: "2",
      label: "Password",
      errorMessage:
        "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
      name: "password",
      type: "password",
      placeholder: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
      value: "",
    },
  ];

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setUserInputs({ ...userInputs, [target.name]: target.value });
  };

  return (
    <div className="login">
    <div className="login_form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {formInputs.map(
          ({ id, name, label, errorMessage, ...inputProps }) => (
            <div key={id} className="form-input">
              <label>{label}</label>
              <br />
              <InputWrapper
                {...inputProps}
                name={name}
                value={userInputs[name as keyof LoginValues]}
                handleChange={handleChange}
              />
              <span>
                <ErrorIcon />
                {errorMessage}
              </span>
            </div>
          ),
        )}
        <button
          disabled={!userInputs.email || !userInputs.password}
          className="btn"
          type="submit"
        >
          LOGIN
        </button>
      </form>
      <div className="login_form_link flex">
        <p>Do not have an account?</p>
        <button
          className="cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>
    </div>
  </div>
  )
};

export default Login;
