const buttonClick = document.getElementById("button");
const resultDisplay = document.getElementById("numberResult");
const userNumber = document.getElementById("numberInput");

function checkNumber() {
  const userNum = Number(userNumber.value);
  if (Number.isNaN(userNum)) {
  }
}

buttonClick.addEventListener("click", checkNumber);
