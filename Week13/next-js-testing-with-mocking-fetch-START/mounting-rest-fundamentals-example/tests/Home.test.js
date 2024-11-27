// Import the component
import Home from "../pages";

import "isomorphic-fetch"; // prevents fetch is not defined errors

// Import test infrastructure
import "@testing-library/jest-dom";
import { screen, render, act } from "@testing-library/react";

// Import the mock infrastructure
import { http, HttpResponse } from "msw"; // This mocks the rest responses
import { setupServer } from "msw/node"; // This sets up a mocked server

import { BASE_URL } from "../utils/api/base"; // needed by our mock server

const QUOTE = "If your PC blows up within 10 minutes, memory leaks are fine";
const AUTHOR = "Tom Maurer";

// Set up the mock server to listen to requests
const server = setupServer(
  http.get(`${BASE_URL}/random`, (res, req, ctx) => {
    // Whenever they request a random quote return the following
    return HttpResponse.json({ content: QUOTE, author: AUTHOR });
  })
);

// Start the mock server
beforeAll(() => {
  server.listen();
});

// Clean up the mock server
afterAll(() => {
  server.close();
});

test("home loads a quote on mount", async () => {
  // Render the component and wait for the state update
  await act(() => {
    render(<Home />);
  });

  // Get the author and quote elements
  let quoteElement = screen.getByTestId("quote");
  let authorElement = screen.getByTestId("author");

  // Check that the elements have the correct text content
  expect(quoteElement).toHaveTextContent(QUOTE);
  expect(authorElement).toHaveTextContent(AUTHOR);
});

test("should load a new quote when button clicked", async () => {
  await act(() => {
    render(<Home />);
  });

  const NEW_QUOTE = "I can shoot 3s with my eyes closed.";
  const NEW_AUTHOR = "Dan Mouris";

  // Update our mock to return new data
  server.use(
    http.get(`${BASE_URL}/random`, (req, res, ctx) => {
      return HttpResponse.json({
        content: NEW_QUOTE,
        author: NEW_AUTHOR,
      });
    })
  );

  // Find the elements
  let buttonElement = screen.getByText("Get New Quote");
  let quoteElement = screen.getByTestId("quote");
  let authorElement = screen.getByTestId("author");

  // Click on the button
  await act(() => {
    buttonElement.click();
  });

  // Check that the new quote is showing
  expect(authorElement).toHaveTextContent(NEW_AUTHOR);
  expect(quoteElement).toHaveTextContent(NEW_QUOTE);
});
