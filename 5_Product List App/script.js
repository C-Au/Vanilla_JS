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
  if (textInput.value.length === 0) {
    return;
  }
  if (numberInput.value < 0) {
    return;
  }
  productPost(textInput.value, numberInput.value);
  textInput.value = "";
  numberInput.value = "";
});
