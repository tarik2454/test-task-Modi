const modal = document.getElementById('modal');
const btn = document.querySelector('.cta-button');
const closeBtn = document.querySelector('.close');

btn?.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    modal.style.opacity = '1';
    modal.querySelector('.modal-content').style.transform = 'scale(1)';
  });
});

closeBtn?.addEventListener('click', () => {
  modal.style.opacity = '0';
  modal.querySelector('.modal-content').style.transform = 'scale(0.9)';
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    closeBtn.click();
  }
});
