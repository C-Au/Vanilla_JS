# Index.html Walkthrough

This page is a simple shopping list UI. `Index.html` provides the structure, and `script.js` is linked with `defer` so the JavaScript can manage the shopping list after the page loads.

## What the page is doing

- Sets the document language to English with `<html lang="en">`.
- Defines basic page metadata like character encoding and responsive viewport settings.
- Uses a title `Shopping List`, which appears in the browser tab.
- Loads `script.js` with `defer`, so the browser waits to run the script until the HTML is parsed.
- Displays an input field, a button to add items, and a list to display products.

## Annotated walkthrough

### 1. Document setup

The document starts with the HTML5 doctype and then opens the `<html>` element.

The `<head>` contains:

- `<meta charset="UTF-8" />` so the browser reads text correctly.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` so the page scales properly on mobile.
- `<title>Shopping List</title>` for the tab title.
- `<script src="script.js" defer></script>` to connect the JavaScript file without blocking page rendering.

### 2. Input area

Inside the `<body>`, the page shows a label and input:

- `<label for="productInput">Add a product:</label>` connects the label to the input for accessibility.
- `<input type="text" id="productInput" name="productInput" />` creates a text field where users type product names.

### 3. Add button

`<button id="button">Add Item</button>` gives the user a button to trigger adding items to the list.

The button gets behavior from `script.js`, which listens for clicks and adds the product to the cart.

### 4. Product list area

`<ul id="productList"></ul>` is the container where products will be displayed as list items.

This is where `script.js` will dynamically create and display each item from the shopping cart.

## Change Log

- 2026-07-01: Created initial documentation for shopping list HTML structure.
