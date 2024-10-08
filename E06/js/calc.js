const screen = document.querySelector(".screen");

let screenNumber = "0",
  partA,
  partB,
  operatorType,
  helper = 0;

screen.innerHTML = screenNumber;

function printOnScreen(x) {
  if (x === ".") {
    screen.innerHTML = (+screenNumber).toLocaleString() + ".";
  } else {
    screen.innerHTML = (+screenNumber).toLocaleString();
  }
}

function setNum(x) {
  if (helper) {
    screenNumber = "";
    helper = 0;
  }
  if (screenNumber === "0") {
    screenNumber = "";
  }
  screenNumber = screenNumber + x;
  printOnScreen(x);
}

function operate(type) {
  if (partA) {
    calculate();
  } else {
    partA = +screenNumber;
  }
  operatorType = type;
  console.log(partA);
  helper = 1;
}

function calculate() {
  partB = +screenNumber;

  if (operatorType === "+") {
    result = partA + partB;
  } else if (operatorType === "-") {
    result = partA - partB;
  } else if (operatorType === "*") {
    result = partA * partB;
  } else {
    result = partA / partB;
  }
  partA = result;
  helper = 1;

  screen.innerHTML = (+result).toLocaleString();
}
