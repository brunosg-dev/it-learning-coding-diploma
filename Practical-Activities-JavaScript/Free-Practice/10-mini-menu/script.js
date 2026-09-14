const siteNav = document.querySelector('#site-nav');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    if (siteNav.style.display === 'none') {
        siteNav.style.display = 'block';
    } else {
        siteNav.style.display = 'none';
    }
})