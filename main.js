let menu = document.getElementById("menuBtn");
let dropdown = document.getElementsByClassName("dropDown")[0];
let show = 0;
menu.addEventListener("mousedown", () => {
  show === 0 ? (show = 1) : (show = 0);
  show === 0 ? (dropdown.style.right = "-100vw")(menu.firstChild.style.transform = "rotate(90deg)") : (dropdown.style.right = "0")(menu.firstChild.style.transform = "rotate(0deg)");
});

menu.addEventListener("touchend", () => {
  menu.style.transform = "scale(1)";
  menu.style.opacity = "1";
})

let propertiesBtn = document.getElementById("propertiesBtn");

propertiesBtn.addEventListener("click", () => {
  window.location.href = "https://www.onthemarket.com/agents/branch/residential-lettings-specialists-ipswich/properties/?let-agreed=true&search-type=to-rent&view=grid";
});
