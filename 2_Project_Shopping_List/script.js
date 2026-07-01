const shoppingCart = [];
const buttonClick = document.getElementById("button");
const listDisplay = document.getElementById("productList");
const userInput = document.getElementById("productInput");

function addProduct() {
  const inputProduct = userInput.value;
  if (inputProduct === "") {
    return;
  }
  shoppingCart.push(inputProduct);
  userInput.value = "";
  renderList();
}

function renderList() {
  listDisplay.innerHTML = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    const newItem = document.createElement("li");
    newItem.textContent = shoppingCart[i];
    listDisplay.appendChild(newItem);
  }
}

buttonClick.addEventListener("click", addProduct);
