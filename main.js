let menu = document.getElementById("menuBtn");
let dropdown = document.getElementsByClassName("dropDown")[0];
let show = 0;
menu.addEventListener("mousedown", () => {
  show === 0 ? (show = 1) : (show = 0);
  show === 0 ? (dropdown.style.right = "-100vw") (menu.firstChild.style.transform = "rotate(90deg)"): (dropdown.style.right = "0") (menu.firstChild.style.transform = "rotate(0deg)");
});