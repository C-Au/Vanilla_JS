# script.js Notes

## Code Block 1: Element Selection

```javascript
const button = document.getElementById("button");
const input = document.getElementById("inputField");
const userList = document.getElementById("listInput");
const taskField = document.getElementById("taskForm");
```

This block grabs the elements from the page that the script needs to work with. It stores the submit button, text input, task list, and form in variables so the rest of the code can use them easily.

## Code Block 2: Form Submission

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

This block runs when the form is submitted. It stops the browser from reloading the page, checks that the task text is at least 4 characters long, sends the valid text to `taskPost`, and then clears the input field.

## Code Block 3: Adding a Task

```javascript
const taskPost = (text) => {
  let li = document.createElement("li");
  li.textContent = text;
  userList.appendChild(li);

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete Task";
  li.appendChild(delBtn);
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
};
```

This block creates a new task item and adds it to the list. It builds an `li` element for the task text, adds a delete button inside that item, removes the item when the delete button is clicked, and toggles the `completed` class when the task itself is clicked.
