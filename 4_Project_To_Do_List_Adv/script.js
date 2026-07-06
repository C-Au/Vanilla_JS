const button = document.getElementById("button");
const input = document.getElementById("inputField");
const userList = document.getElementById("listInput");

button.addEventListener("click", () => {
  if (input.value.length < 4) {
    return;
  }
  let li = document.createElement("li");
  li.textContent = input.value;
  userList.appendChild(li);
  input.value = "";

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete Task";
  li.appendChild(delBtn);
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
});
