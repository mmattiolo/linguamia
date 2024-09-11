const card = document.querySelector('.flashcard .card-inner');

card.addEventListener('click', function() {
  card.classList.toggle('flipped');
});
