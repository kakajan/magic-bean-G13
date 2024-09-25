const startGameBTN = document.querySelector(".startGame");
const introPage = document.querySelector(".intro");
const gamePage = document.querySelector(".gameContainer");
startGameBTN.addEventListener("click", function () {
  introPage.classList.add("animate__animated");
  introPage.classList.add("animate__fadeOut");
  setTimeout(() => {
    gamePage.classList.add("show");
    gamePage.classList.add("animate__animated");
    gamePage.classList.add("animate__fadeIn");
  }, 1000);
});
document.body.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
      console.log("Right");

      break;
    case "ArrowLeft":
      console.log("left");

      break;
    case "ArrowUp":
    case " ":
      console.log("Jump");

      break;

    default:
      break;
  }
});
