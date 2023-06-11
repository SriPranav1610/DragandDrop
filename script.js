const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list__content');

function allowDrop(ev) {
  ev.preventDefault();
}

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('dragend', dragend);
});

function dragstart() {
  lists.forEach(list => list.classList.add('highlight'));
  this.classList.add('dragging');
}

function dragend() {
  lists.forEach(list => list.classList.remove('highlight'));
  this.classList.remove('dragging');
}

lists.forEach(list => {
  list.addEventListener('dragover', dragover);
  list.addEventListener('dragleave', dragleave);
  list.addEventListener('drop', drop);
});

function dragover(event) {
  event.preventDefault();
  this.classList.add('over');
}

function dragleave() {
  this.classList.remove('over');
}

function drop() {
  this.classList.remove('over');
  const carddrag = document.querySelector('.dragging');
  this.appendChild(carddrag);
  displaySuccessMessage();
}

function displaySuccessMessage() {
 
  alert('Dropped successfully!');
}



function resetContainers() {
  lists[0].appendChild(cards[0]);
  lists[0].appendChild(cards[1]);
  lists[0].appendChild(cards[2]);
  lists[1].innerHTML = '';
}
