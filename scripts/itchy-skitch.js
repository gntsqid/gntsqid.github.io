document.getElementById('generate').addEventListener('click', () => {
  const cols = parseInt(document.getElementById('cols').value);
  const rows = parseInt(document.getElementById('rows').value);
  const container = document.getElementById('container');

const squareSize = 50;

container.style.width = `${cols * squareSize}px`;
container.innerHTML = ''; // Clear existing grid

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    // Store grid coordinates
    div.dataset.row = row;
    div.dataset.col = col;

    // Click event: log and color
    div.addEventListener('click', () => {
      console.log(`Clicked square at row ${row}, col ${col}`);
      div.style.backgroundColor = 'steelblue';
    });

    container.appendChild(div);
  }
}
});
