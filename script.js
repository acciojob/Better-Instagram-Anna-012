const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

draggables.forEach(draggable => {
  // When dragging starts, set the dragged element
  draggable.addEventListener('dragstart', (e) => {
    draggedElement = e.target; // Store the element being dragged
    e.target.classList.add('dragging'); // Add visual feedback for dragging
  });

  // When dragging ends, remove the visual feedback
  draggable.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
    draggedElement = null; // Reset dragged element
  });

  // Allow drop by preventing default behavior
  draggable.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Handle the drop and swap the images
  draggable.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement && draggedElement !== e.target) {
      // Swap background images of dragged and dropped elements
      const draggedImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedImage;
    }
  });
});
