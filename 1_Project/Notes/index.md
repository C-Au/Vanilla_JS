# Index.html Walkthrough

This page is a small starter UI for checking a number. Right now, `Index.html` provides the structure and `script.js` is linked for future behavior, but the script file is empty, so the page does not actually validate or process the input yet.

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

- `<label for="numberInput">Type in your number (up to 3 digits):</label>` connects the label to the input for accessibility.
- `<input type="number" id="numberInput" name="numberInput" />` creates a numeric input field.

Even though the label says “up to 3 digits,” the HTML does not currently enforce that limit. There is no `maxlength`, `min`, `max`, or JavaScript validation yet.

### 3. Action button

`<button id="button">Click Me!</button>` gives the user a button to trigger checking logic.

At the moment, the button has no visible behavior because `script.js` is empty.

### 4. Output area

`<div id="numberResult"></div>` is reserved for displaying results or feedback.

This is probably where the script will eventually show messages like:

- whether the number is valid
- whether it meets a rule
- any error or helper text

## Current behavior

The page renders a simple layout, but it does not yet do any checking. The important IDs are already in place, which means the HTML is set up for JavaScript to hook into later.

## Notes

- The file name is `Index.html`, but the title says `Number Checking App`; that is consistent with the intended purpose.
- If you want the input to truly accept only up to 3 digits, the next step would be adding validation in `script.js` and possibly HTML constraints.