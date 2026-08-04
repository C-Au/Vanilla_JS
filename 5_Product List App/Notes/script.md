# script.js Walkthrough

This file is the behavior layer for the Product List App. It manages the product data, handles user input for adding products, displays them in the list, and provides filtering functionality based on price.

## What the script is doing

- Finds and stores references to all the important page elements (inputs, buttons, list, form).
- Maintains a `products` array to store product objects with name and price properties.
- Initializes the products array with two sample products: "Laptop" ($1000) and "Phone" ($500).
- Listens for form submission to add new products.
- Validates input before adding products.
- Displays products dynamically in the list.
- Filters products to show only those with prices above $900.

## Annotated walkthrough

### 1. Grabbing the elements

The script starts by storing references to all the important page elements:

```javascript
const nameInput = document.getElementById("nameField");
const numberInput = document.getElementById("numberField");
const productList = document.getElementById("listInput");
const filterBtn = document.getElementById("filterButton");
const form = document.getElementById("nameForm");
```

These variables let the script interact with the HTML without searching for the same elements repeatedly.

### 2. Initializing product data

```javascript
let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];
```

The `products` array holds product objects. Each product has two properties:
- `name` — the product name as a string
- `price` — the product price as a number

This initial data gives users something to work with immediately, and it's also available for filtering.

### 3. Handling form submission

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameInput.value.length === 0) {
    return;
  }
  if (numberInput.value < 0) {
    return;
  }
  productPost(nameInput.value, numberInput.value);
  nameInput.value = "";
  numberInput.value = "";
});
```

When the form is submitted:
- `e.preventDefault()` stops the page from reloading (the default form behavior).
- The script checks if the product name is empty. If it is, the function stops early.
- The script checks if the price is negative. If it is, the function stops early.
- If validation passes, `productPost()` is called to add the product.
- Both input fields are cleared so the user can enter another product.

### 4. Adding products to the list and data

```javascript
const productPost = (name, price) => {
  let li = document.createElement("li");
  li.textContent = name + " - $" + price;
  productList.appendChild(li);

  price = Number(price);
  let saveProduct = { name, price };
  products.push(saveProduct);
};
```

The `productPost()` function handles adding a product:
- Creates a new list item (`<li>`) element.
- Sets its text to display the product name and price (e.g., "Laptop - $1000").
- Adds the list item to the product list in the DOM so users see it immediately.
- Converts the price to a number (in case it was a string from the input).
- Creates a product object with the name and price.
- Pushes the product object into the `products` array for storage.

### 5. Displaying products

```javascript
const displayProduct = (name, price) => {
  let li = document.createElement("li");
  li.textContent = name + " - $" + price;
  productList.appendChild(li);
};
```

The `displayProduct()` function is a reusable way to add a product to the list display. It's used by the filter function to show filtered results. It creates a list item and adds it to the DOM.

### 6. Filtering products by price

```javascript
filterBtn.addEventListener("click", () => {
  productList.innerHTML = "";
  let expensiveProducts = products.filter((product) => product.price > 900);
  expensiveProducts.forEach((product) => {
    displayProduct(product.name, product.price);
  });
});
```

When the filter button is clicked:
- `productList.innerHTML = ""` clears all products from the list display.
- `.filter((product) => product.price > 900)` creates a new array with only products that cost more than $900.
- `.forEach()` loops through the filtered products and calls `displayProduct()` for each one.
- The list now shows only expensive products ($1000+).

## Current behavior

The script successfully manages a product catalog. Users can add products with names and prices, and filter the list to show only high-priced items (>$900). All products are stored in the `products` array for persistence during the session.

## Notes

- Input validation prevents empty product names and negative prices.
- The `filter()` method creates a new array without modifying the original `products` array, so the full list is preserved even when viewing filtered results.
- Products are stored in an in-memory array; data will be lost if the page is refreshed.
