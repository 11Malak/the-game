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
<<<<<<< HEAD
let YTANKSHOTPosition = AHUMANTANKPosition;
=======
let YTANKSHOTPosition = 94;
>>>>>>> 7d469cd2e2c3bc9d07e1e277c38f97d568457f7e
//const V = false;

//Ditribution
const addA = (index) => cells[index].classList.add('AHUMANTANK');
const removeA = (index) => cells[index].classList.remove('AHUMANTANK');

<<<<<<< HEAD
const addY = (index) => cells[index].classList.add('YTANKSHOT');
const removeY = (index) => cells[index].classList.remove('YTANKSHOT');
=======
const addB = (index) => cells[index].classList.add('AHUMANTANK');
const removeB = (index) => cells[index].classList.remove('AHUMANTANK');
>>>>>>> 7d469cd2e2c3bc9d07e1e277c38f97d568457f7e

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
<<<<<<< HEAD
  let YTANKSHOTPosition = AHUMANTANKPosition;
=======
  //const y = Math.floor(BPosition / 10);

  /*const x = YPosition % 10;
  const y = Math.floor(YPosition / 10);*/

>>>>>>> 7d469cd2e2c3bc9d07e1e277c38f97d568457f7e
  // 3 - Mover a Bchu de un cuadro al otro dependiendo la orientación y la dirección
  //  3.1  ¿Cómo puedo saber en que coordenas Bchu se encuentra?

  removeA(AHUMANTANKPosition);
<<<<<<< HEAD
  console.log(YTANKSHOTPosition);
  console.log(width);
=======

  //removeY(YPosition);

>>>>>>> 7d469cd2e2c3bc9d07e1e277c38f97d568457f7e
  switch (key) {
    case 'ArrowRight':
      if (x < width - 1) {
        AHUMANTANKPosition++;
      }
      break;
    case 'ArrowLeft':
      if (x > 0) {
        AHUMANTANKPosition--;
<<<<<<< HEAD
        console.log('TANQUEMOVIENDOSE');
=======
>>>>>>> 7d469cd2e2c3bc9d07e1e277c38f97d568457f7e
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
<<<<<<< HEAD

  addA(AHUMANTANKPosition);
};
=======
  addA(AHUMANTANKPosition);
};

>>>>>>> 7d469cd2e2c3bc9d07e1e277c38f97d568457f7e
addA(AHUMANTANKPosition);

window.addEventListener('keyup', handleKeyPress);
