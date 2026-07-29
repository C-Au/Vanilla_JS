# index.html Notes

## Code Block 1: Document Setup

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To Do List</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js" defer></script>
  </head>
</html>
```

This block sets up the page itself. It tells the browser to use HTML5, sets the language to English, defines the character encoding, and makes the layout responsive on smaller screens. It also gives the page its title, connects the CSS file, and loads the JavaScript file with `defer` so the script runs after the HTML is parsed.

## Code Block 2: Page Content

```html
<body>
  <div class="container">
    <label for="inputField">Tasks to be added:</label>
    <form id="taskForm">
      <input type="text" id="inputField" size="50" />

      <button type="submit" id="button">Add Item</button>
    </form>
    <ul id="listInput" class="items-list"></ul>
  </div>
</body>

</html>
```

This block builds the visible to-do list interface. The label describes the input field, the form wraps the text box and submit button, and the unordered list starts empty so JavaScript can add tasks into it. The container and class names are used for styling the layout.
