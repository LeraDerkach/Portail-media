// Opening the mobile version

let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let close = document.getElementById('close');
let overlay = document.getElementById('overlay');

function openMenu() {
  menu.classList.add('active');
  overlay.classList.add('active');
  burger.classList.add('active');
  burger.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  burger.classList.remove('active');
  burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
  menu.classList.contains('active') ? closeMenu() : openMenu();
});

close.addEventListener('click', closeMenu);

// overlay
overlay.addEventListener('click', closeMenu);

// ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});
