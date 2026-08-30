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

// logic for the "Back to Top" button
/* Find button
Find navigation

When button clicked:
    open/close navigation
    check whether it is open
    update accessibility state

When browser resized:
    if width >= 768px
        close mobile menu
        reset accessibility state */