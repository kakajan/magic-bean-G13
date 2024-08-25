const screen = document.getElementById("demo");
screen.style.fontSize = "58px";
let x = 5,
  y = 6,
  z = 21;
let res = "";
console.log(res);
//   const firstName = "Usher";
//   const lastName = "SM";
//   screen.innerHTML = firstName + " " + lastName;
// screen.innerHTML = "1" + x + y  + z;
res = res + x + "<br>";
res = res + (x + y) + "<br>";
res = res + (x + y + z);
screen.innerHTML = res;
{
  let x = 50;
  screen.innerHTML = x;
  console.log(x);
}
function showX() {
  let x = 60;
  console.log(x);
}
showX();
console.log(x);
screen.innerHTML = 100;
