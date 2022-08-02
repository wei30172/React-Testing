import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

test("handles onClick", () => {
  render(<Counter />);

  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getByText("Add");
  fireEvent.click(buttonElement);

  expect(divElement).toHaveTextContent("Count is 1");
});
