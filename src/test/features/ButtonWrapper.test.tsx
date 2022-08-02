import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonWrapper } from "../../features";

test("handles onClick", () => {
  const onClick = jest.fn();

  render(<ButtonWrapper onClick={onClick} title="Add" />);
  const buttonElement = screen.getByText("Add");
  fireEvent.click(buttonElement);

  expect(onClick).toHaveBeenCalledTimes(1);
});
