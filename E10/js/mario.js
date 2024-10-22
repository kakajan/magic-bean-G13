const startGameBTN = document.querySelector(".startGame");
const introPage = document.querySelector(".intro");
const gamePage = document.querySelector(".gameContainer");
const wallBlocks = document.querySelector(".wallBlocks");
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
const keySates = {
  left: false,
  right: false,
  up: false,
};
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
      keySates.right = true;
      break;
    case "ArrowLeft":
      keySates.left = true;
      break;
    case "ArrowUp":
    case " ":
      keySates.up = true;
      break;
    default:
      break;
  }

  // switch (event.key) {
  //   case "ArrowRight":
  //     mario.classList.remove("flip");
  //     if (timer > 1) {
  //       if (!moving) {
  //         mario.src = "assets/img/walking.gif";
  //         mario.style.width = "60px";
  //         mario.style.height = "129px";
  //         moving = true;
  //       }
  //       walk(3);
  //     }
  //     console.log("Right");

  //     break;
  //   case "ArrowLeft":
  //     mario.classList.add("flip");
  //     if (timer > 1) {
  //       if (!moving) {
  //         mario.src = "assets/img/walking.gif";
  //         mario.style.width = "60px";
  //         mario.style.height = "129px";
  //         moving = true;
  //       }
  //       walk(-3);
  //     }
  //     console.log("left");
  //     break;
  //   case "ArrowUp":
  //   case " ":
  //     if (!jumping) {
  //       jumping = true;
  //       mario.src = "assets/img/jumping.gif";
  //       mario.style.bottom = y + 100 + "px";
  //       setTimeout(() => {
  //         mario.style.bottom = y + "px";
  //         setTimeout(() => {
  //           jumping = false;
  //           resetPose();
  //         }, 250);
  //       }, 400);
  //     }
  //     console.log("Jump");

  //     break;

  //   default:
  //     break;
  // }
});
document.addEventListener("keyup", function (event) {
  switch (event.key) {
    case "ArrowRight":
      keySates.right = false;
      resetPose();
      break;
    case "ArrowLeft":
      keySates.left = false;
      resetPose();
      break;
    default:
      break;
  }
});
// document.addEventListener("keyup", function (event) {
//   if (moving && !jumping) {
//     resetPose();
//   }
// });

function updatePosition() {
  timer++;
  if (keySates.left && keySates.up) {
    jumpPose();
    mario.classList.add("flip");
    walk(-8);
    if (!jumping) {
      jumping = true;
      mario.style.bottom = y + 100 + "px";
      setTimeout(() => {
        mario.style.bottom = y + "px";
        setTimeout(() => {
          jumping = false;
          keySates.up = false;
          resetPose();
        }, 250);
      }, 400);
    }
    console.log("Jump");
  } else if (keySates.right && keySates.up) {
    jumpPose();
    mario.classList.remove("flip");
    walk(8);
    if (!jumping) {
      jumping = true;
      mario.style.bottom = y + 100 + "px";
      setTimeout(() => {
        mario.style.bottom = y + "px";
        setTimeout(() => {
          jumping = false;
          keySates.up = false;
          resetPose();
        }, 250);
      }, 400);
    }
    console.log("Jump");
  } else if (keySates.right) {
    mario.classList.remove("flip");
    if (timer > 1) {
      if (!moving) {
        mario.src = "assets/img/walking.gif";
        mario.style.width = "60px";
        mario.style.height = "129px";
        moving = true;
      }
      walk(3);
    }
    console.log("Right");
  } else if (keySates.left) {
    mario.classList.add("flip");
    if (timer > 1) {
      if (!moving) {
        mario.src = "assets/img/walking.gif";
        mario.style.width = "60px";
        mario.style.height = "129px";
        moving = true;
      }
      walk(-3);
    }
    console.log("Left");
  } else if (keySates.up) {
    jumpPose();
    if (!jumping) {
      jumping = true;
      for (let i = 0; i < 201; i +=10) {
        console.log(checkCollision(wallBlocks, mario));

        if (!checkCollision(wallBlocks, mario)) {
          mario.style.bottom = y + i + "px";
        } else {
          if (i + mario.clientHeight < 180) {
            mario.style.bottom = y + i + "px";
          }
        }
      }
      setTimeout(() => {
        mario.style.bottom = y + "px";
        setTimeout(() => {
          jumping = false;
          keySates.up = false;
          resetPose();
        }, 250);
      }, 400);
    }
    console.log("Jump");
  } else {
    resetPose();
  }

  requestAnimationFrame(updatePosition);
}
requestAnimationFrame(updatePosition);

function resetPose() {
  mario.src = "assets/img/standing.gif";
  mario.style.width = "80px";
  mario.style.height = "132px";
  moving = false;
  timer = 0;
}
function jumpPose() {
  mario.src = "assets/img/jumping.gif";
  mario.style.width = "80px";
  mario.style.height = "132px";
}
function checkCollision(x, y) {
  let m = y.getBoundingClientRect();
  let w = x.getBoundingClientRect();
  console.log("mario Top " + m.top);
  console.log("wall Bottom " + w.bottom);

  // return w.left < m.right && w.bottom < m.top;
  if (w.left < m.right && w.right > m.left) {
    if (w.bottom < m.top) {
      return true;
    } else {
      return false;
    }
  }
}
