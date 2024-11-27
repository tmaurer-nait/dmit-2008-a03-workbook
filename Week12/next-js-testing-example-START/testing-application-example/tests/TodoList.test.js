// import testing infrastructure
import "@testing-library/jest-dom";
import { render, fireEvent, screen, act } from "@testing-library/react";

// Import component we will test
import TodoList from "../components/TodoList";

// Test function has 2 arguments, description of test, and callback function that is the test
// test("", () => {});

// Test that the title renders correctly
test("todo list title renders correctly", () => {
  // renders to screen
  render(<TodoList />);
  // find the title
  const titleElement = screen.getByText("Our Todo List");

  // Assert that the title is in the document
  expect(titleElement).toBeInTheDocument();
});

// Test that the todolist adds items correctly
test("todo is added successfully", () => {
  render(<TodoList />);

  // find all the necessary elements
  const inputElement = screen.getByLabelText("New Todo");
  const buttonElement = screen.getByText("Add Todo");
  const listElement = screen.getByTestId("todo-item-list");

  // create a constant string value, to be used throughout the test
  const EXPECTED_STRING = "Learn about jest";

  // change the input field
  fireEvent.change(inputElement, {
    target: {
      value: EXPECTED_STRING,
    },
  });

  // Assert that input field has changed
  expect(inputElement.value).toBe(EXPECTED_STRING);

  // click on add todo button
  act(() => {
    buttonElement.click();
  });

  // Assert that the text has been added to the list
  expect(listElement).toHaveTextContent(EXPECTED_STRING);

  // Assert that the input field is blank again
  expect(inputElement.value).toBe("");
});
