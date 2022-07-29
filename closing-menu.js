const enableIcon = document.querySelector('.nav-left');
const closeIcon = document.querySelector('.closing-icon');

enableIcon.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.add('visible');
});

closeIcon.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.remove('visible');
});

// For each element in list on click close it
document.querySelectorAll('.navigation').forEach((li) => {
  li.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('visible');
  });
});
