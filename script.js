//Mobile menu
const hamburguerBtn = document.querySelector(".hamburguer");
const navItems = document.querySelector("#nav-items");
const navItemsLinks = document.querySelectorAll("#nav-items li");

hamburguerBtn.addEventListener("click", () => {
  hamburguerBtn.classList.toggle("open");
  navItems.classList.toggle("scale-100");
  document.body.classList.toggle("hide-overflow");
});

navItemsLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (hamburguerBtn.classList.contains("open")) {
      hamburguerBtn.classList.toggle("open");
      navItems.classList.toggle("scale-100");
      document.body.classList.toggle("hide-overflow");
    }
  });
});
