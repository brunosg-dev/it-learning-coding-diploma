const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");

menuButton.addEventListener("click", function () {
  siteNav.classList.toggle("is-open");

  const isOpen = siteNav.classList.contains("is-open");

  menuButton.setAttribute("aria-expanded", isOpen);
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
