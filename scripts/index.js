// Do a grid it fill all the screen on cells to guide the scipts by each movements they must do by all the screen.

const width = 10;
const height = width;

const cellCount = width * height;

const grid = document.querySelector('.grid');

const cells = [];

// The code do a loop to increase index value until the wanted N to introduce text at each grill

for (let index = 0; index < cellCount; index++) {
  const cell = document.createElement('div');
  cell.innerText = index;
  grid.appendChild(cell);
  cells.push(cell);
}

let BPosition = 89;

const addB = (index) => cells[index].classList.add('B-ENEMY-ALIENBATTLESHIP');
const removeB = (index) =>
  cells[index].classList.remove('B-ENEMY-ALIENBATTLESHIP');

const handleKeyPress = (event) => {
  const { key } = event;

  const x = BPosition % 10;
  const y = Math.floor(BPosition / 10);

  // 3 - Mover a Bchu de un cuadro al otro dependiendo la orientación y la dirección
  //  3.1  ¿Cómo puedo saber en que coordenas Bchu se encuentra?

  removeB(BPosition);

  switch (key) {
    case 'ArrowUp':
      if (y > 0) {
        BPosition = BPosition - width;
      }
      break;
    case 'ArrowRight':
      if (x < width - 1) {
        BPosition++;
      }
      break;
    case 'ArrowDown':
      if (y < width - 1) {
        BPosition = BPosition + width;
      }
      break;
    case 'ArrowLeft':
      if (x > 0) {
        BPosition--;
      }

      break;
    default:
      console.log('Eso no es una flecha flaco');
      break;
  }
  addB(BPosition);
};

addB(BPosition);

window.addEventListener('keyup', handleKeyPress);
