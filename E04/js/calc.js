const screen = document.querySelector(".screen");
let screenNumber = "0";
screen.innerHTML = screenNumber;
function printOnScreen() {
  screen.innerHTML = (+screenNumber).toLocaleString();
}
function setNum (x) {
    if (screenNumber === '0') {
        screenNumber = ''
    }
  screenNumber = screenNumber + x;
  printOnScreen();
}
