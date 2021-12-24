const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.getElementById("navMenu");
const closeBtn = document.querySelector(".close_Btn");
let menuOpen = false;
// console.log(menuOpen);

// toggle hamburger menu
menuBtn.addEventListener("click", function () {
  if (!menuOpen) {
    menuOpen = true;
    menuBtn.classList.add("open");
    navMenu.classList.add("navbar_active");
  } else {
    menuOpen = false;
    menuBtn.classList.remove("open");
    navMenu.classList.remove("navbar_active");
  }
});



const links = document.querySelectorAll(".header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}