const buttonClick = document.getElementById("button");
const resultDisplay = document.getElementById("numberResult");
const userNumber = document.getElementById("numberInput");

function checkNumber() {
  const userNum = Number(userNumber.value);
  if (Number.isNaN(userNum)) {
    resultDisplay.textContent = "This is not a number.";
  } else if (userNum === 0) {
    resultDisplay.textContent = "This number is zero.";
  } else if (userNum < 0) {
    resultDisplay.textContent = "This number is negative.";
  } else if (userNum % 2 === 0) {
    resultDisplay.textContent = "This is an even number.";
  } else {
    resultDisplay.textContent = "This is an odd number.";
  }
}

buttonClick.addEventListener("click", checkNumber);
