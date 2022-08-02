import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavMenu from "./NavMenu";

test("renders a user", () => {
  const menuItems = [
    {
      name: "test",
      href: "/test",
    },
  ];

  render(
    <Router>
      <NavMenu menuItems={menuItems} />
    </Router>,
  );

  const anchorElements = screen.getAllByRole("navigation");

  expect(anchorElements[0]).toHaveTextContent(menuItems[0].name);

  fireEvent.click(anchorElements[0]);
  expect(window.location.pathname).toBe(menuItems[0].href);
});
