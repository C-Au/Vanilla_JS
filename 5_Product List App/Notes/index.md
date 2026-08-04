# index.html Walkthrough

This page is a product management interface where users can add products with names and prices, view them in a list, and filter by price. `Index.html` provides the structure, and `script.js` is linked with `defer` so the JavaScript can manage the product list after the page loads.

## What the page is doing

- Sets the document language to English with `<html lang="en">`.
- Defines basic page metadata like character encoding and responsive viewport settings.
- Uses the title `Product List App`, which appears in the browser tab.
- Links to `styles.css` for styling the page with a gradient background and card layout.
- Loads `script.js` with `defer`, so the browser waits to run the script until the HTML is parsed.
- Displays input fields for product name and price, an add button, a product list, and a filter button.

## Annotated walkthrough

### 1. Document setup

The document starts with the HTML5 doctype and then opens the `<html>` element.

The `<head>` contains:

- `<meta charset="UTF-8" />` so the browser reads text correctly.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` so the page scales properly on mobile.
- `<title>Product List App</title>` for the tab title.
- `<link rel="stylesheet" href="styles.css">` to link the external stylesheet for styling.
- `<script src="script.js" defer></script>` to connect the JavaScript file without blocking page rendering.

### 2. Form input area

Inside the `<body>` within a container `<div>`, the page displays a label and two input fields:

- `<label for="inputField">New Products to be added:</label>` describes the input fields for accessibility.
- `<input type="text" id="nameField" size="50" placeholder="Enter product name" />` creates a text field where users enter the product name.
  - `placeholder` shows hint text: "Enter product name"
  - `size="50"` sets the visible width of the input field
- `<input type="number" id="numberField" size="50" placeholder="Enter price" />` creates a number field for entering the product price.
  - `placeholder` shows hint text: "Enter price"
  - `type="number"` restricts input to numeric values

### 3. Form submission

`<form id="nameForm">` wraps the input fields and button together as a form.

- `<button type="submit" id="submitButton">Add Item</button>` gives the user a button to submit the form and add a product to the list.
- The form prevents the default page reload behavior through `preventDefault()` in the JavaScript.

### 4. Product list display

`<ul id="listInput" class="items-list"></ul>` is the container where products will be displayed as list items.

This is where `script.js` will dynamically create and display each product with its name and price (e.g., "Laptop - $1000").

### 5. Filter button

`<button type="button" id="filterButton">Filter products on price</button>` gives users a way to filter the product list.

When clicked, this button triggers the filter function in `script.js`, which displays only products with prices above $900.
