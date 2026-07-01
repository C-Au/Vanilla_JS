const shoppingCart = [];
const buttonClick = document.getElementById("button");
const listDisplay = document.getElementById("productList");
const userInput = document.getElementById("productInput");

function addProduct() {
  const inputProduct = userInput.value;
  if (inputProduct === "") {
    userInput.placeholder =
      "You have not entered anything. Type in the product name.";
    return;
  }
  shoppingCart.push(inputProduct);
  userInput.value = "";
  userInput.placeholder = "Type in the product you want to add";
  renderList();
}

function renderList() {
  listDisplay.innerHTML = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    const newItem = document.createElement("li");
    newItem.dataset.index = i;
    newItem.addEventListener("click", function () {
      const indexToDelete = newItem.dataset.index;
      shoppingCart.splice(indexToDelete, 1);
      renderList();
    });
    newItem.textContent = shoppingCart[i];
    listDisplay.appendChild(newItem);
  }
}

buttonClick.addEventListener("click", addProduct);

userInput.addEventListener("focus", function () {
  userInput.placeholder = "Type in the product you want to add";
});
