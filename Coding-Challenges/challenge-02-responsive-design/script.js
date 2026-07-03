const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");

menuButton.addEventListener("click", function () {
  siteNav.classList.toggle("is-open");

  const isOpen = siteNav.classList.contains("is-open");

  menuButton.setAttribute("aria-expanded", isOpen);
});

