import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputWrapper from "./InputWrapper";

test("handles onChange", () => {
  const OnChange = jest.fn();
  const props = {
    name: "email",
    type: "email",
    value: "test@testnet.co.us",
    placeholder: "Email",
    pattern: "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
    required: true,
  };

  render(<InputWrapper handleChange={OnChange} {...props} />);
  // const emailInput = screen.getByTestId("input-email");
  const emailInput = screen.getByPlaceholderText("Email");
  const inputWord = "test@testnet.co.us";
  fireEvent.change(emailInput, { target: { value: inputWord } });
});
