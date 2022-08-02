import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { APIComponent } from "../../components";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Claire" }));
  }),
);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("gets the data component", async () => {
  render(<APIComponent />);

  const output = await waitFor(() => screen.findByRole("contentinfo"));

  expect(output).toHaveTextContent("Name is Claire.");
});
