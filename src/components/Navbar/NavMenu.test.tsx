import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavMenu from "./NavMenu";

test("renders a user", () => {
  const menuItems = [
    {
      name: "test",
      href: "/test",
    },
  ];
  render(<NavMenu menuItems={menuItems} />);

  const anchorElements = screen.getAllByRole("navigation");

  expect(anchorElements[0]).toHaveTextContent(menuItems[0].name);
  expect(anchorElements[0]).toHaveAttribute("href", menuItems[0].href);
});
