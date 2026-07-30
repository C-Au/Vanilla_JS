const textInput = document.getElementById("textField");
const numberInput = document.getElementById("numberField");
const productList = document.getElementById("listInput");
const filterBtn = document.getElementById("filterButton");
const form = document.getElementById("nameForm");

let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
