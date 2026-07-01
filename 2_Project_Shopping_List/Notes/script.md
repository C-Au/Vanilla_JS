# script.js Walkthrough

This file is the behavior layer for the shopping list. It connects the elements from `Index.html`, reads the user's input, stores products in an array, and displays them on the page.

## What the script is doing

- Finds the button element with `getElementById("button")`.
- Finds the product list display area with `getElementById("productList")`.
- Finds the product input field with `getElementById("productInput")`.
- Manages a `shoppingCart` array to store products.
- Defines an `addProduct` function that runs when the button is clicked.
- Defines a `renderList` function that displays all products on the page.
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
- `shoppingCart.push(inputProduct);` adds the product name to the `shoppingCart` array.
- `userInput.value = "";` clears the input field so it's ready for the next entry.
- `renderList();` calls the render function to update the display.

### 3. The renderList function

`function renderList() {}` displays all products from the shopping cart:

- `listDisplay.innerHTML = "";` clears the previous list to start fresh.
- The `for` loop goes through each item in `shoppingCart`.
- `document.createElement("li");` creates a new list item element.
- `newItem.textContent = shoppingCart[i];` sets the item's text to the product name.
- `listDisplay.appendChild(newItem);` adds the item to the page inside the `<ul>`.

### 4. Connecting the button

`buttonClick.addEventListener("click", addProduct);` tells the browser to run `addProduct` whenever the button is clicked.

This is the final piece that wires the interface together.

## Current behavior

When a user clicks the "Add Item" button:
1. The product name from the input is added to `shoppingCart`
2. The input field is cleared
3. `renderList()` is called to refresh the display
4. All products in the cart are shown as list items on the page

## Change Log

- 2026-07-01: Created initial documentation for shopping list script.
- 2026-07-01: Documented the addProduct function for adding items.
- 2026-07-01: Documented the renderList function for displaying items.
- 2026-07-01: Added note about function-within-function calling pattern.

## Notes

- `shoppingCart` is an array that holds all product names as strings.
- `renderList()` is called inside `addProduct()`, showing how to call functions within functions.
- The `innerHTML = ""` technique ensures the list is cleared before rendering new items, preventing duplicates.
