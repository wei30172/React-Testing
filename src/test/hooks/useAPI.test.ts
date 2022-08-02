import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { useAPI } from "../../hooks/useAPI";

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

test("gets the data from hooks", async () => {
  const { result } = renderHook(() => useAPI());

  await waitFor(() => {
    expect(result.current).toEqual({ name: "Claire" });
  });
});

// toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead.
