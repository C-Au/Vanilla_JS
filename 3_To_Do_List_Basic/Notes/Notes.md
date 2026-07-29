# To Do List Basic Project

## Files in this folder

### `Index.html`
- Defines the page structure for a simple To Do List application.
- Loads `script.js` with the `defer` attribute so the JavaScript runs after the page loads.
- Contains:
  - A label for the input field.
  - A text input with id `inputField` for entering new tasks.
  - A button with id `button` to add items.
  - An unordered list with id `listInput` where new tasks are appended.

### `script.js`
- Implements the interactive behavior of the To Do List app.
- Selects elements from the page: the add button, the task input, and the task list.
- Adds a click event listener to the add button.
- When clicked:
  - If the input text is fewer than 4 characters, nothing happens.
  - Otherwise, it creates a new list item (`li`), sets its text to the input value, appends it to the task list, and clears the input.

## Summary
This project is a basic To Do List app that lets a user enter a task and add it to a list. The JavaScript ensures tasks shorter than 4 characters are not added.
