window.addEventListener('DOMContentLoaded', () => {

  const menuButton = document.querySelector('#menu-button');

  menuButton.addEventListener('click', () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('visible');
  });

});