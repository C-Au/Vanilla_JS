# script.js Walkthrough

This file is the behavior layer for the page. Right now, it connects the elements from `Index.html` and sets up a click handler, but the main function is still empty, so the button does not do anything yet.

## What the script is doing

- Finds the button element with `getElementById("button")`.
- Finds the result area with `getElementById("numberResult")`.
- Finds the number input with `getElementById("numberInput")`.
- Defines a `checkNumber` function that will run when the button is clicked.
- Attaches the click listener to the button.

## Annotated walkthrough

### 1. Grabbing the elements

The script starts by storing references to the important page elements:

- `const buttonClick = document.getElementById("button");`
- `const resultDisplay = document.getElementById("numberResult");`
- `const userNumber = document.getElementById("numberInput");`

These variables let the script interact with the HTML without searching for the same elements again later.

### 2. Setting up the action

`function checkNumber() {}` creates the function that will eventually handle the validation or message display.

At the moment, it is empty, so clicking the button does not change anything.

### 3. Connecting the button

`buttonClick.addEventListener("click", checkNumber);` tells the browser to run `checkNumber` whenever the button is clicked.

This is the part that wires the interface together. The button is ready, the input is ready, and the result area is ready, but the actual logic still needs to be added inside `checkNumber`.

## Current behavior

The script successfully connects to the HTML elements and listens for clicks, but it does not yet read the input value, validate it, or display anything in the result area.

## Notes

- `buttonClick`, `resultDisplay`, and `userNumber` are clear variable names because they describe what each element is used for.
- If you want this file to do the checking work, the next step is to fill in `checkNumber()` with logic that reads the input and updates `resultDisplay`.