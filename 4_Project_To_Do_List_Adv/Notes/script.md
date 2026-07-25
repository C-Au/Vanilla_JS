# script.js Notes

This script creates an interactive to-do list. A user can add a task, click a
task to mark it as complete, delete a task, and refresh the page without losing
the saved tasks. The script uses the HTML document (the DOM), JavaScript arrays,
and the browser's `localStorage` feature.

## Code Block 1: Selecting HTML Elements and Loading Saved Data

```javascript
const input = document.getElementById("inputField");
const userList = document.getElementById("listInput");
const taskField = document.getElementById("taskForm");
let saveList = [];
let savedTasks = JSON.parse(localStorage.getItem("myList")) || [];
```

### `document.getElementById()`

`document` represents the current HTML page. The `getElementById()` method
searches that page for an element whose `id` matches the text inside the
parentheses.

For example, `document.getElementById("inputField")` finds this element from
`index.html`:

```html
<input type="text" id="inputField" />
```

The result is stored in a variable. This lets the script read the input,
change the list, and listen for form events without searching for the element
again.

### The arrays

`saveList` starts as an empty array. It holds the task objects currently created
by the script. Each task object is intended to have this shape:

```javascript
{
  text: "Buy groceries",
  complete_state: false
}
```

When a new task is submitted, the form calls `taskPost(input.value)` without
passing `complete_state`, so the property initially has the value
`undefined`. Because `JSON.stringify()` omits object properties whose value is
`undefined`, a newly saved incomplete task is stored with only its `text`
property. Restored tasks receive the saved value when one exists. Clicking a
task changes `complete_state` to `true` or `false`, after which that property
is saved explicitly.

`savedTasks` loads tasks that were stored during an earlier visit.

### `localStorage.getItem()` and `JSON.parse()`

`localStorage` is a small browser storage area that can keep data after a page
is refreshed. `getItem("myList")` looks for a stored value using `"myList"` as
the key. A key is simply a name used to find a stored value later.

Values in `localStorage` are stored as strings, so the script uses
`JSON.parse()` to convert the stored JSON string back into a JavaScript array.
The `|| []` part means "use an empty array if nothing has been saved yet."

## Code Block 2: Handling Form Submission

```javascript
taskField.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.length < 4) {
    return;
  }
  taskPost(input.value);
  input.value = "";
});
```

### `addEventListener()`

`addEventListener()` attaches a function that should run when something happens
to an element. Here, the event is `"submit"`, so the callback runs whenever the
form is submitted. The callback is an arrow function:

```javascript
(e) => {
  // code that runs after the event
};
```

The `e` parameter is the event object. The browser passes it to the callback
automatically, and it contains information about the event that occurred.

### `preventDefault()`

Forms normally reload the page after submission. `e.preventDefault()` cancels
that built-in browser behavior. This is important because the task can then be
added with JavaScript while the current page stays open.

### Validation and `return`

`input.value` is the text currently entered in the input. The `length` property
counts its characters. If the text has fewer than four characters, `return`
stops this callback immediately, so an invalid task is not added.

For valid text, `taskPost(input.value)` calls the task-creation function and
passes the input text to it. Since no completion state is passed for a new
task, it starts without the `completed` class. Finally, setting `input.value`
to an empty string clears the input field for the next task.

## Code Block 3: Creating and Saving a Task

```javascript
const taskPost = (text, complete_state) => {
  let li = document.createElement("li");
  li.textContent = text;
  if (complete_state) {
    li.classList.add("completed");
  }
  userList.appendChild(li);

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete Task";
  li.appendChild(delBtn);
  delBtn.addEventListener("click", () => {
    li.remove();
    saveList = saveList.filter((item) => saveTask !== item);
    updateLocal();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTask.complete_state = !saveTask.complete_state;
    updateLocal();
  });

  let saveTask = { text, complete_state };
  saveList.push(saveTask);

  updateLocal();
};
```

That keeps the behavior consistent and avoids duplicating the code that creates

### `document.createElement()`

adds that task to the currently empty `saveList`, so later saves include both
`document.createElement("li")` creates a new list-item element in memory. It
does not appear on the page until it is attached to an existing element.
`li.textContent = text` puts the task text inside the new item.

### Restoring the completed style

The second parameter, `complete_state`, is either truthy or falsy. When a saved
task was already complete, the `if` statement runs and
`li.classList.add("completed")` adds the CSS class that styles it as complete.

`classList` is the collection of CSS classes on an element. Its `add()` method
adds a class without replacing the element's other classes.

### `appendChild()`

`userList.appendChild(li)` places the new `li` inside the `<ul>` on the page.
The delete button is created in the same way, then
`li.appendChild(delBtn)` places the button inside that task item.

### Deleting a task with `remove()` and `filter()`

The delete button gets its own click listener. `li.remove()` removes the visible
task from the page.

The array must also be updated, or the task would return after a refresh.
`filter()` creates a new array containing every item except the object belonging
to the deleted task. The new array replaces `saveList`.

## Code Block 4: Saving the Current List

```javascript
const updateLocal = () => {
  let saveLocal = JSON.stringify(saveList);
  localStorage.setItem("myList", saveLocal);
};
```

This helper function keeps the saving code in one place. Instead of repeating
`JSON.stringify()` and `localStorage.setItem()` inside every event listener,
the script can simply call `updateLocal()` whenever the list changes.

### `JSON.stringify()` and `localStorage.setItem()`

JavaScript arrays and objects cannot be stored directly in `localStorage`.
`JSON.stringify(saveList)` converts them into a JSON string. Then
`localStorage.setItem("myList", saveLocal)` stores that string under the same
`"myList"` key used by `getItem()` at the top of the file.

The function is called after a task is added, after a task is deleted, and after
a task's completion state changes. This keeps the stored data matched with what
the user sees.

## Code Block 5: Marking a Task Complete

```javascript
li.addEventListener("click", () => {
  li.classList.toggle("completed");
  saveTask.complete_state = !saveTask.complete_state;
  updateLocal();
});
```

`classList.toggle("completed")` is convenient for a state that switches back
and forth. If the class is missing, `toggle()` adds it. If it is already there,
`toggle()` removes it.

The `!` operator means "not." Therefore,
`saveTask.complete_state = !saveTask.complete_state` changes `true` to `false`
or `false` to `true`. The data object and the visible CSS class are changed
together, and `updateLocal()` then saves the updated array to `localStorage`.

The click listener is attached to the `li`, so clicking the task toggles its
completed state. The delete button is inside the `li`, so a delete click also
bubbles up to the `li` click listener in the browser. This means the current
code can also toggle the task's completion state during a delete click before
the final save. The task is then removed from the array by the delete handler.
In a later improvement, `event.stopPropagation()` could be used in the delete
handler to prevent the button click from reaching the `li` listener.

## Code Block 6: Loading Tasks When the Page Opens

```javascript
savedTasks.forEach((task) => {
  taskPost(task.text, task.complete_state);
});
```

`forEach()` runs the callback once for every item in the `savedTasks` array.
For each saved task, the callback passes its text and completion state to
`taskPost()`. This rebuilds the list in the DOM and reconnects the delete and
completion event listeners after a page refresh.

The same `taskPost()` function is used for both new tasks and restored tasks.
That keeps the behavior consistent and avoids duplicating the code that creates
buttons, listeners, and saved task data.

## Overall Flow

1. The script finds the form, input, and list in the HTML.
2. It loads any previously saved tasks from `localStorage`.
3. `forEach()` restores each saved task by calling `taskPost()`.
4. When the user submits the form, the input is validated.
5. A valid task is created, added to `saveList`, and saved as JSON.
6. Clicking a task toggles its completed state and saves the change.
7. Clicking **Delete Task** removes the task from the page and from storage.
8. Because the delete button is inside the `li`, its click also bubbles to the
   task's click listener and briefly toggles the completion state before the
   task is removed.

## Change Log

### July 14, 2026

- Added the `updateLocal()` helper to centralize JSON conversion and
  `localStorage` updates.
- Updated the task object name in the examples from `saveData` to `saveTask`.
- Updated the delete and completion examples to call `updateLocal()`.
- Added an explanation of why a helper function avoids repeating the same
  storage code.
- Renumbered the code-block headings to include the new saving section.

### July 21, 2026

- Documented that new tasks do not pass an initial `complete_state`, so the
  value is initially `undefined` and is omitted from the first JSON save.
- Clarified that restored tasks are added back into `saveList` by
  `taskPost()` before future saves.
- Added the delete-button event bubbling behavior to the overall flow.
