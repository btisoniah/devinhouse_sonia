const card = document.querySelector('p');

card.addEventListener('dblclick', function(e) {
    card.classList.toggle('large');
});