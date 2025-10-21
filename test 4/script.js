const cards = document.querySelectorAll('.card-inner');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
  });
});