const nameInput = document.getElementById("nameField");
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

const productPost = (name, price) => {
  let li = document.createElement("li");
  li.textContent = name + " - $" + price;
  productList.appendChild(li);

  price = Number(price);
  let saveProduct = { name, price };
  products.push(saveProduct);
};

const displayProduct = (name, price) => {
  let li = document.createElement("li");
  li.textContent = name + " - $" + price;
  productList.appendChild(li);
};
