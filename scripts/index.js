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

//initial state alien and human
let AHUMANTANKPosition = 94;
let YTANKSHOTPosition = AHUMANTANKPosition;
//const V = false;

//Ditribution
const addA = (index) => cells[index].classList.add('AHUMANTANK');
const removeA = (index) => cells[index].classList.remove('AHUMANTANK');

const addY = (index) => cells[index].classList.add('YTANKSHOT');
const removeY = (index) => cells[index].classList.remove('YTANKSHOT');

/*switch (key) {
  case 'SpaceBar':
    V = true;
    if (y > 0) {
      YPosition = YPosition - height;
    }
    break;
    default:
      console.log('Eso no es una flecha flaco');
      break;
  }*/

/*if (V == true) {
  const addY = (index) => cells[index].classList.add('Y-HUMAN ROCKET');
  const removeY = (index) => cells[index].classList.remove('Y-HUMAN-ROCKET');
}*/

const handleKeyPress = (event) => {
  const { key } = event;

  const x = AHUMANTANKPosition % 10;
  let YTANKSHOTPosition = AHUMANTANKPosition;
  // 3 - Mover a Bchu de un cuadro al otro dependiendo la orientación y la dirección
  //  3.1  ¿Cómo puedo saber en que coordenas Bchu se encuentra?

  removeA(AHUMANTANKPosition);
  console.log(YTANKSHOTPosition);
  console.log(width);
  switch (key) {
    case 'ArrowRight':
      if (x < width - 1) {
        AHUMANTANKPosition++;
      }
      break;
    case 'ArrowLeft':
      if (x > 0) {
        AHUMANTANKPosition--;
        console.log('TANQUEMOVIENDOSE');
      }
      break;

    case 'SpaceBar':
      if (YTANKSHOTPosition > width) {
        setInterval(() => {
          removeY(YTANKSHOTPosition);
          YTANKSHOTPosition -= width;
          addY(YTANKSHOTPosition);
          console.log('LASER-MOVIENDOSE');
          if (YTANKSHOTPosition < width) {
            clearInterval(YTANKSHOTPosition);
          }
        }, 500);
      }
      break;
  }

  addA(AHUMANTANKPosition);
};
addA(AHUMANTANKPosition);

window.addEventListener('keyup', handleKeyPress);
