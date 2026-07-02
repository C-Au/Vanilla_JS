# Index.html Walkthrough

This page is a simple shopping list UI. `Index.html` provides the structure, and `script.js` is linked with `defer` so the JavaScript can manage the shopping list after the page loads.

## What the page is doing

- Sets the document language to English with `<html lang="en">`.
- Defines basic page metadata like character encoding and responsive viewport settings.
- Uses a title `Simple Shopping List`, which appears in the browser tab.
- Links to `styles.css` for styling the page.
- Loads `script.js` with `defer`, so the browser waits to run the script until the HTML is parsed.
- Displays an input field, a button to add items, and a list to display products.

## Annotated walkthrough

### 1. Document setup

The document starts with the HTML5 doctype and then opens the `<html>` element.

The `<head>` contains:

- `<meta charset="UTF-8" />` so the browser reads text correctly.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` so the page scales properly on mobile.
- `<title>Simple Shopping List</title>` for the tab title.
- `<link rel="stylesheet" href="styles.css">` to link the external stylesheet for styling.
- `<script src="script.js" defer></script>` to connect the JavaScript file without blocking page rendering.

### 2. Input area

Inside the `<body>`, the page displays an input field:

- `<input type="text" id="productInput" name="productInput" placeholder="Type in the product you want to add" maxlength="50" autofocus />` creates a text field where users type product names.
  - `placeholder` shows hint text: "Type in the product you want to add"
  - `maxlength="50"` limits input to 50 characters
  - `autofocus` puts the cursor in the field when the page loads

### 3. Add button

`<button id="button">Click to add product</button>` gives the user a button to trigger adding items to the list.

The button gets behavior from `script.js`, which listens for clicks and adds the product to the cart.

### 4. Product list area

`<ul id="productList"></ul>` is the container where products will be displayed as list items.

This is where `script.js` will dynamically create and display each item from the shopping cart. Completed items will be styled with the `.completed` CSS class.

### 5. Input attributes

The input field includes several attributes for better UX:

- `placeholder="Type in the product you want to add"` — Shows hint text to guide the user
- `maxlength="50"` — Limits input to 50 characters
- `autofocus` — Puts the cursor in the field when the page loads for faster interaction

### 6. Styling with styles.css

The external stylesheet `styles.css` provides styling for the page elements:

- `.completed` — Styles completed items with strikethrough text and reduced opacity
- `#productInput`, `#button`, `#productList` — Styles the input field, button, and list area

The stylesheet separates the presentation layer from the HTML structure, making the code more organized and maintainable.

## Change Log

- 2026-07-01: Created initial documentation for shopping list HTML structure.
- 2026-07-01: Added stylesheet link to `styles.css`, input attributes (`placeholder`, `maxlength`, `autofocus`), removed label element, and updated button text.
- 2026-07-01: Updated documentation to reflect object-based storage, toggle functionality for completed items, and `.completed` CSS class for visual feedback.
