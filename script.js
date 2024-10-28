const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    e.target.classList.add('dragging');
  });

  draggable.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
  });

  draggable.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  draggable.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement !== e.target) {
      // Swap the background images
      const draggedImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedImage;
    }
  });
});

