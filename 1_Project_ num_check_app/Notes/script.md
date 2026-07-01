# script.js Walkthrough

This file is the behavior layer for the page. It connects the elements from `Index.html`, reads the user’s input, and displays a message based on the number entered.

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

`function checkNumber() {}` creates the function that handles the validation and message display.

Inside the function, the input value is converted with `Number(userNumber.value)`, then checked against several cases: not a number, zero, negative, even, and odd.

### 3. Connecting the button

`buttonClick.addEventListener("click", checkNumber);` tells the browser to run `checkNumber` whenever the button is clicked.

This is the part that wires the interface together. The button is ready, the input is ready, and the result area is ready, and the logic inside `checkNumber` updates the result text.

## Current behavior

The script successfully connects to the HTML elements and listens for clicks. When the button is pressed, it reads the input value, validates it, and displays a result message in the result area.

## Change Log

- 2026-06-29: Updated walkthrough to match current working function, documented number checks (invalid input, zero, negative, even, odd), and added result messages shown in `#numberResult`.

## Notes

- `buttonClick`, `resultDisplay`, and `userNumber` are clear variable names because they describe what each element is used for.
- `Number.isNaN(userNum)` is used to catch values that cannot be converted into a number.