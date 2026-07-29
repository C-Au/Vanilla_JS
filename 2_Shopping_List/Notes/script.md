# script.js Walkthrough

This file is the behavior layer for the shopping list. It connects the elements from `Index.html`, reads the user's input, stores products in an array, displays them on the page, and allows items to be deleted by clicking on them.

## What the script is doing

- Finds the button element with `getElementById("button")`.
- Finds the product list display area with `getElementById("productList")`.
- Finds the product input field with `getElementById("productInput")`.
- Manages a `shoppingCart` array to store product objects with `name` and `completed` properties.
- Defines an `addProduct` function that adds items and validates input.
- Defines a `renderList` function that displays all products and attaches toggle functionality to each item.
- Attaches the click listener to the button and input field for UX enhancements.

## Annotated walkthrough

### 1. Setting up variables and the shopping cart

The script starts by creating variables to store references to important page elements:

- `const shoppingCart = [];` creates an empty array to hold product objects with `{ name, completed }` structure.
- `const buttonClick = document.getElementById("button");` finds the add button.
- `const listDisplay = document.getElementById("productList");` finds the list container.
- `const userInput = document.getElementById("productInput");` finds the input field.

These variables let the script interact with the HTML and manage data efficiently.

### 2. The addProduct function

`function addProduct() {}` handles adding a new product to the cart:

- `const inputProduct = userInput.value;` gets the text the user typed.
- `if (inputProduct === "") { userInput.placeholder = "..."; return; }` checks if the input is empty, updates the placeholder with a validation message, and stops if it is (prevents blank items).
- `shoppingCart.push({ name: inputProduct, completed: false });` adds a new object to `shoppingCart` with the product name and `completed` property set to `false`.
- `userInput.value = "";` clears the input field so it's ready for the next entry.
- `userInput.placeholder = "Type in the product you want to add";` resets the placeholder to the default message.
- `renderList();` calls the render function to update the display.

### 3. The renderList function

`function renderList() {}` displays all products from the shopping cart and makes them toggleable:

- `listDisplay.innerHTML = "";` clears the previous list to start fresh.
- The `for` loop goes through each item in `shoppingCart`.
- `document.createElement("li");` creates a new list item element.
- `newItem.dataset.index = i;` stores the item's position number as data on the element.
- `newItem.addEventListener("click", function() {...})` adds a click listener to each item.
  - Inside the listener: `const indexToDelete = newItem.dataset.index;` gets the position.
  - `shoppingCart[indexToDelete].completed = !shoppingCart[indexToDelete].completed;` toggles the `completed` property between `true` and `false` using the NOT operator (`!`).
  - `renderList()` refreshes the display to show the updated list.
- `newItem.textContent = shoppingCart[i].name;` accesses the `name` property of the object and sets it as the item's text.
- `if (shoppingCart[i].completed) { newItem.classList.add("completed"); }` checks if the item is marked completed and adds the `completed` CSS class for styling.
- `listDisplay.appendChild(newItem);` adds the item to the page inside the `<ul>`.

### 4. Connecting the button and input field

`buttonClick.addEventListener("click", addProduct);` tells the browser to run `addProduct` whenever the button is clicked.

`userInput.addEventListener("focus", function() {...})` resets the placeholder text to the default message when the user clicks in the input field. This improves UX by clearing any validation error messages.

These are the final pieces that wire the interface together.

## Current behavior

When a user clicks the "Add Item" button:
1. Input validation checks if the field is empty
2. If empty, the placeholder updates with a validation message and nothing is added
3. If not empty, a new object `{ name: productName, completed: false }` is added to `shoppingCart`
4. The input field is cleared and the placeholder resets
5. `renderList()` is called to refresh the display
6. All products in the cart are shown as clickable list items on the page

When a user clicks in the input field:
1. The placeholder resets to the default hint text (clears any validation messages)

When a user clicks on a product in the list:
1. The item's `completed` property toggles between `true` and `false`
2. If `completed` is `true`, the `.completed` CSS class is added to the item for visual styling (strikethrough and reduced opacity)
3. `renderList()` is called to refresh the display
4. The item remains in the cart but appears crossed out if completed

## Change Log

- 2026-07-01: Created initial documentation for shopping list script, including addProduct and renderList functions, and function-within-function calling pattern notes.
- 2026-07-01: Updated documentation to reflect delete functionality added to list items; items now store index with data attribute and have click listeners for removal; added input validation for empty fields.
- 2026-07-01: Major update — converted from string-based storage to object-based storage; replaced delete functionality with toggle for completed status; added `.completed` CSS class styling; added input focus event listener for improved UX.

## Notes

- `shoppingCart` is an array that holds objects with `{ name: string, completed: boolean }` structure.
- Each object stores the product name and whether it has been marked as completed.
- `renderList()` is called inside `addProduct()` and inside click listeners, showing how to call functions within functions.
- The `innerHTML = ""` technique ensures the list is cleared before rendering new items, preventing duplicates.
- `dataset.index` stores each item's position in the array so its completed status can be toggled.
- The `!` operator toggles boolean values: `!true` becomes `false`, `!false` becomes `true`.
- Empty input validation prevents adding blank items; placeholder text provides user feedback.
- `classList.add()` adds the `completed` CSS class to visually indicate completed items.
- Dot notation (`object.property`) accesses object properties, e.g., `shoppingCart[i].name` gets the product name.
