# script.js Notes

This file handles the to-do list behavior.

- Selects the form, input, button, and list elements from the page.
- Listens for the form submit event.
- Stops the page from refreshing when the form is submitted.
- Rejects task text shorter than 4 characters.
- Creates a new list item for each valid task.
- Adds a "Delete Task" button inside each item so it can be removed.
- Lets the user click a task to toggle the `completed` class.
- Clears the input after a task is added.
