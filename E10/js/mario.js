const startGameBTN = document.querySelector(".startGame");
const introPage = document.querySelector(".intro");
const gamePage = document.querySelector(".gameContainer");
const mario = document.querySelector(".mario");
let timer = 0;
let x = 50;
let y = 250;
let moving = false;
let jumping = false;
mario.style.left = x + "px";
mario.style.bottom = y + "px";
startGameBTN.addEventListener("click", function () {
  introPage.classList.add("animate__animated");
  introPage.classList.add("animate__fadeOut");
  setTimeout(() => {
    gamePage.classList.add("show");
    gamePage.classList.add("animate__animated");
    gamePage.classList.add("animate__fadeIn");
  }, 1000);
});
function walk(step) {
  x += step;
  mario.style.left = x + "px";
  console.log(x);
}
document.body.addEventListener("keydown", function (event) {
  timer++;
  console.log(timer);

  switch (event.key) {
    case "ArrowRight":
      mario.classList.remove("flip");
      if (timer > 5) {
        if (!moving) {
          mario.src = "assets/img/walking.gif";
          mario.style.width = "60px";
          mario.style.height = "129px";
          moving = true;
        }
        walk(3);
      }
      console.log("Right");

      break;
    case "ArrowLeft":
      mario.classList.add("flip");
      if (timer > 5) {
        if (!moving) {
          mario.src = "assets/img/walking.gif";
          mario.style.width = "60px";
          mario.style.height = "129px";
          moving = true;
        }
        walk(-3);
      }
      console.log("left");
      break;
    case "ArrowUp":
    case " ":
      if (!jumping) {
        jumping = true;
        mario.src = "assets/img/jumping.gif";
        mario.style.bottom = y + 100 + "px";
        setTimeout(() => {
          mario.style.bottom = y + "px";
          setTimeout(() => {
            jumping = false;
            resetPose();
          }, 250);
        }, 400);
      }
      console.log("Jump");

      break;

    default:
      break;
  }
});
function resetPose() {
  mario.src = "assets/img/standing.gif";
  mario.style.width = "80px";
  mario.style.height = "132px";
  moving = false;
}
document.body.addEventListener("keyup", function (event) {
  if (moving && !jumping) {
    resetPose();
  }
  timer = 0;
});
