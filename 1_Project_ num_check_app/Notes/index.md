# Index.html Walkthrough

This page is a small starter UI for checking a number. `Index.html` provides the structure, and `script.js` is linked with `defer` so the JavaScript can handle the number checking after the page loads.

## What the page is doing

- Sets the document language to English with `<html lang="en">`.
- Defines basic page metadata like character encoding and responsive viewport settings.
- Uses the title `Number Checking App`, which is what appears in the browser tab.
- Loads `script.js` with `defer`, so the browser waits to run the script until the HTML is parsed.
- Displays a label, a number input, a button, and a result area.

## Annotated walkthrough

### 1. Document setup

The document starts with the HTML5 doctype and then opens the `<html>` element.

The `<head>` contains:

- `<meta charset="UTF-8" />` so the browser reads text correctly.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` so the page scales properly on mobile.
- `<title>Number Checking App</title>` for the tab title.
- `<script src="script.js" defer></script>` to connect the JavaScript file without blocking page rendering.

### 2. Form-like input area

Inside the `<body>`, the page shows a label and input:

- `<label for="numberInput">Type in your number (whole numbers only, no decimal digits):</label>` connects the label to the input for accessibility.
- `<input type="text" id="numberInput" name="numberInput" />` creates a text field that the script later converts into a number.

The HTML itself does not enforce number rules yet. The validation happens in `script.js`, which checks whether the value is a real number, zero, negative, even, or odd.

### 3. Action button

`<button id="button">Click Me!</button>` gives the user a button to trigger checking logic.

The button now has behavior because `script.js` listens for clicks and runs the checking function.

### 4. Output area

`<div id="numberResult"></div>` is reserved for displaying results or feedback.

This is probably where the script will eventually show messages like:

- whether the number is valid
- whether it meets a rule
- any error or helper text

## Current behavior

The page renders a simple layout and works with the script file to check the number entered by the user. The important IDs are in place, which means the HTML is set up for JavaScript to read the input and show the result.

## Change Log

- 2026-06-30: Created `styles.css` with modern styling including gradient background, centered card layout, and responsive design.
- 2026-06-30: Updated `Index.html` to link to the new stylesheet and wrapped content in a container div with a title heading.
- 2026-06-30: Added input focus states, button hover animations, and improved overall visual appearance.
- 2026-06-29: Updated the walkthrough to match the current markup and behavior.
- 2026-06-29: Replaced the old input description with the current whole-number label and text input.
- 2026-06-29: Noted that `script.js` now handles the validation and output behavior.

## Notes

- The file name is `Index.html`, but the title says `Number Checking App`; that is consistent with the intended purpose.
- The script currently distinguishes between invalid input, zero, negative numbers, even numbers, and odd numbers.