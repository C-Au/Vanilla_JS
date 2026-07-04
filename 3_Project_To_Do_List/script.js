const button = document.getElementById("button");
const input = document.getElementById("inputField");
const userList = document.getElementById("listInput");

button.addEventListener("click", () => {
  if (input.value.length === 0) {
    return;
  }
  let li = document.createElement("li");
  li.textContent = input.value;
  userList.appendChild(li);
  input.value = "";
});
