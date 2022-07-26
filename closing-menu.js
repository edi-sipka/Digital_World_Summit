const enableIcon = document.querySelector('.nav-left');
const closeIcon = document.querySelector('.closing-icon');

enableIcon.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.add('visible');
});

closeIcon.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.remove('visible');
});

document.querySelectorAll('.navigation').forEach((li) => {
  li.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('visible');
  });
});
