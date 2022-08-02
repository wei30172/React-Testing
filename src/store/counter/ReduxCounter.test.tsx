import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";

import { ReduxCounter } from "../../components";
import store from "..";

test("increment", () => {
  render(
    <Provider store={store}>
      <ReduxCounter />
    </Provider>,
  );

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});

test("increment again", () => {
  render(
    <Provider store={store}>
      <ReduxCounter />
    </Provider>,
  );

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("1");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("2");
});
