
window.onscroll = () => {
let header = document.querySelector(`.header .navbar`);

header.classList.toggle(`sticky`, window.scrollY > 100);
}