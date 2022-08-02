import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import User from "./User";

test("renders a user", () => {
  render(<User email="test@testnet.co.us" />);

  // const emailElement = screen.getByText(/, user - test@testnet.co.us/i);
  const emailElement = screen.getByRole("contentinfo");

  // expect(emailElement).toBeInTheDocument();
  expect(emailElement).toHaveTextContent(", user - test@testnet.co.us");
  expect(emailElement).toHaveAttribute("role", "contentinfo");
});
