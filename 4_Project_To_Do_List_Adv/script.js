const button = document.getElementById("button");
const input = document.getElementById("inputField");
const userList = document.getElementById("listInput");
const taskField = document.getElementById("taskForm");
let saveList = [];

taskField.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.length < 4) {
    return;
  }
  taskPost(input.value);
  input.value = "";
});

const taskPost = (text) => {
  let li = document.createElement("li");
  li.textContent = text;
  userList.appendChild(li);

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete Task";
  li.appendChild(delBtn);
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  let saveData = { text, completed: false };
  saveList.push(saveData);

  let saveLocal = JSON.stringify(saveList);
  localStorage.setItem("myList", saveLocal);
};
