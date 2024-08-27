const drawer = document.querySelector(".drawer");
const bio = document.querySelector(".bio");
let drawerStat;
function openDrawer() {
  if (drawerStat) {
    drawer.classList.remove("openedDrawer");
    drawerStat = 0;
  } else {
    drawer.classList.add("openedDrawer");
    drawerStat = 1;
  }
}
function openBio() {
    bio.classList.add("openBio");
}
function closeBio() {
    bio.classList.remove("openBio");
}
