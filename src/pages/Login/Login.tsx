import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InputWrapper, ButtonWrapper } from "../../components";
import ErrorIcon from "@material-ui/icons/Error";
import { toast } from "react-hot-toast";
import "./Login.scss";

export interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
      type: "text",
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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      toast.success(`Welcome, ${data.name}!`);
    } catch (err) {
      toast.error("Login Failure.");
    }
    setLoading(false);
    navigate("/");
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
                <p data-testid={`error-${name}`}>
                  <ErrorIcon />
                  {errorMessage}
                </p>
              </div>
            ),
          )}
          <ButtonWrapper
            disabled={!userInputs.email || !userInputs.password}
            className="btn"
            type="submit"
            title={loading ? "please wait" : "Login"}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
