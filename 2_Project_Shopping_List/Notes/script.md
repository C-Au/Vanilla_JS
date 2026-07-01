# script.js Walkthrough

This file is the behavior layer for the shopping list. It connects the elements from `Index.html`, reads the user's input, stores products in an array, displays them on the page, and allows items to be deleted by clicking on them.

## What the script is doing

- Finds the button element with `getElementById("button")`.
- Finds the product list display area with `getElementById("productList")`.
- Finds the product input field with `getElementById("productInput")`.
- Manages a `shoppingCart` array to store products.
- Defines an `addProduct` function that adds items and validates input.
- Defines a `renderList` function that displays all products and attaches delete functionality to each item.
- Attaches the click listener to the button.

## Annotated walkthrough

### 1. Setting up variables and the shopping cart

The script starts by creating variables to store references to important page elements:

- `const shoppingCart = [];` creates an empty array to hold product names.
- `const buttonClick = document.getElementById("button");` finds the add button.
- `const listDisplay = document.getElementById("productList");` finds the list container.
- `const userInput = document.getElementById("productInput");` finds the input field.

These variables let the script interact with the HTML and manage data efficiently.

### 2. The addProduct function

`function addProduct() {}` handles adding a new product to the cart:

- `const inputProduct = userInput.value;` gets the text the user typed.
- `if (inputProduct === "") { return; }` checks if the input is empty and stops if it is (prevents blank items).
- `shoppingCart.push(inputProduct);` adds the product name to the `shoppingCart` array.
- `userInput.value = "";` clears the input field so it's ready for the next entry.
- `renderList();` calls the render function to update the display.

### 3. The renderList function

`function renderList() {}` displays all products from the shopping cart and makes them deletable:

- `listDisplay.innerHTML = "";` clears the previous list to start fresh.
- The `for` loop goes through each item in `shoppingCart`.
- `document.createElement("li");` creates a new list item element.
- `newItem.dataset.index = i;` stores the item's position number as data on the element.
- `newItem.addEventListener("click", function() {...})` adds a click listener to each item.
  - Inside the listener: `const indexToDelete = newItem.dataset.index;` gets the position.
  - `shoppingCart.splice(indexToDelete, 1);` removes 1 item from the array at that position.
  - `renderList()` refreshes the display to show the updated list.
- `newItem.textContent = shoppingCart[i];` sets the item's text to the product name.
- `listDisplay.appendChild(newItem);` adds the item to the page inside the `<ul>`.

### 4. Connecting the button

`buttonClick.addEventListener("click", addProduct);` tells the browser to run `addProduct` whenever the button is clicked.

This is the final piece that wires the interface together.

## Current behavior

When a user clicks the "Add Item" button:
1. The product name from the input is added to `shoppingCart` (if not empty)
2. The input field is cleared
3. `renderList()` is called to refresh the display
4. All products in the cart are shown as clickable list items on the page

When a user clicks on a product in the list:
1. That item is removed from the `shoppingCart` array
2. `renderList()` is called to refresh the display
3. The deleted item disappears from the page

## Change Log

- 2026-07-01: Created initial documentation for shopping list script, including addProduct and renderList functions, and function-within-function calling pattern notes.
- 2026-07-01: Updated documentation to reflect delete functionality added to list items; items now store index with data attribute and have click listeners for removal; added input validation for empty fields.

## Notes

- `shoppingCart` is an array that holds all product names as strings.
- `renderList()` is called inside `addProduct()`, showing how to call functions within functions.
- The `innerHTML = ""` technique ensures the list is cleared before rendering new items.
- `dataset.index` stores each item's position in the array so it can be deleted later.
- `splice()` is used to remove items by position: `splice(index, 1)` removes 1 item at that index.
- Empty input validation prevents adding blank items to the shopping cart.
