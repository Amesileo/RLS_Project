let menu = document.getElementById("menuBtn");
let dropdown = document.getElementsByClassName("dropDown")[0];
let show = 0;
menu.addEventListener("mousedown", () => {
  show === 0 ? (show = 1) : (show = 0);
  show === 0 ? (dropdown.style.right = "-100vw")(menu.children[0].style.transform = "rotate(90deg)") : (dropdown.style.right = "0")(menu.children[0].style.transform = "rotate(0deg)");
});

menu.addEventListener("touchend", () => {
  menu.style.transform = "scale(1)";
  menu.style.opacity = "1";
})

let propertiesBtn = document.getElementById("propertiesBtn");

propertiesBtn.addEventListener("click", () => {
  goToProperties();
});

document.addEventListener("scroll", () => {
  dropdown.style.right = "-100vw";
  menu.children[0].style.transform = "rotate(90deg)";
  show = 0;
});

let phoneBtn = document.getElementsByClassName("btnWrapper2")[0].children[0];
let emailBtn = document.getElementsByClassName("btnWrapper2")[0].children[1];

phoneBtn.addEventListener("click", () => {
  window.location.href = "tel:01473400383";
});

emailBtn.addEventListener("click", () => {
  window.location.href = "mailto:info@residentiallettingsspecialists.com";
});

let otmBtn = document.getElementsByClassName("award")[3];

otmBtn.addEventListener("mouseover", () => {
  otmBtn.style.cursor = "pointer";
})

otmBtn.addEventListener("click", () => {
  goToProperties();
});

function goToProperties() {
  window.location.href = "https://www.onthemarket.com/agents/branch/residential-lettings-specialists-ipswich/properties/?let-agreed=true&search-type=to-rent&view=grid";
}