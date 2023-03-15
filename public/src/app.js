
const menuButton = document.getElementById('nav-hamburger-button');
const menu = document.getElementById('navbar-default');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});