import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";

test("email and passwordinput should be rendered and emtpy", () => {
  render(
    <Router>
      <Login />
    </Router>,
  );
  const emailInputEl = screen.getByPlaceholderText(
    /Email/i,
  ) as HTMLInputElement;
  const passwordInputEl = screen.getByPlaceholderText(
    /Password/i,
  ) as HTMLInputElement;
  expect(emailInputEl).toBeInTheDocument();
  expect(emailInputEl.value).toBe("");
  expect(passwordInputEl).toBeInTheDocument();
  expect(passwordInputEl.value).toBe("");
});

test("login button should be render and disabled", () => {
  render(
    <Router>
      <Login />
    </Router>,
  );
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
  expect(buttonEl).toBeDisabled();
});

test("email and password input should change", () => {
  render(
    <Router>
      <Login />
    </Router>,
  );
  const emailInputEl = screen.getByPlaceholderText(
    /Email/i,
  ) as HTMLInputElement;

  const passwordInputEl = screen.getByPlaceholderText(
    /Password/i,
  ) as HTMLInputElement;

  const testValue = "test";

  fireEvent.change(emailInputEl, { target: { value: testValue } });
  expect(emailInputEl.value).toBe(testValue);
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test("button should not be disabled when inputs exist", () => {
  render(
    <Router>
      <Login />
    </Router>,
  );
  const buttonEl = screen.getByRole("button");
  const emailInputEl = screen.getByPlaceholderText(
    /Email/i,
  ) as HTMLInputElement;
  const passwordInputEl = screen.getByPlaceholderText(
    /Password/i,
  ) as HTMLInputElement;

  const testValue = "test";

  fireEvent.change(emailInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(buttonEl).not.toBeDisabled();
});

test("loading should be rendered correctly. navigate to home after login successfully.", async () => {
  render(
    <Router>
      <Login />
    </Router>,
  );
  const buttonEl = screen.getByRole("button");
  const emailInputEl = screen.getByPlaceholderText(
    /Email/i,
  ) as HTMLInputElement;
  const passwordInputEl = screen.getByPlaceholderText(
    /Password/i,
  ) as HTMLInputElement;

  const testValue = "test";

  fireEvent.change(emailInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveTextContent(/please wait/i);
  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
  expect(window.location.pathname).toBe("/");
});
