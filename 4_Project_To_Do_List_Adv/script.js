const input = document.getElementById("inputField");
const userList = document.getElementById("listInput");
const taskField = document.getElementById("taskForm");
let saveList = [];
let savedTasks = JSON.parse(localStorage.getItem("myList")) || [];

taskField.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.length < 4) {
    return;
  }
  taskPost(input.value);
  input.value = "";
});

const updateLocal = () => {
  let saveLocal = JSON.stringify(saveList);
  localStorage.setItem("myList", saveLocal);
};

const taskPost = (text, complete_state) => {
  let li = document.createElement("li");
  li.textContent = text;
  if (complete_state) {
    li.classList.add("completed");
  }
  userList.appendChild(li);

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete Task";
  li.appendChild(delBtn);
  delBtn.addEventListener("click", () => {
    li.remove();
    saveList = saveList.filter((item) => saveData !== item);
    updateLocal();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveData.complete_state = !saveData.complete_state;
    updateLocal();
  });

  let saveData = { text, complete_state };
  saveList.push(saveData);

  updateLocal();
};

savedTasks.forEach((task) => {
  taskPost(task.text, task.complete_state);
});
