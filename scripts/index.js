// Do a grid it fill all the screen on cells to guide the scipts by each movements they must do by all the screen.

const width = 10;
const height = width;

const cellCount = width * height;

const grid = document.querySelector('.grid');
const cells = [];
let AHUMANTANKPosition = 94;
let YTANKSHOTPosition = AHUMANTANKPosition;
let DMIDLANERALIENPosition = [13, 14, 15, 16, 17, 23, 24, 25, 26, 27];
let EVANGUARDALIENPosition = [33, 34, 35, 36, 37, 43, 44, 45, 46, 47];

// The code do a loop to increase index value until the wanted N to introduce text at each grill

for (let index = 0; index < cellCount; index++) {
  const cell = document.createElement('div');
  cell.innerText = index;
  grid.appendChild(cell);
  cells.push(cell);
}

EVANGUARDALIENPosition.forEach((EVANGUARDALIENFleet) => {
  console.log(EVANGUARDALIENFleet);
  cells[EVANGUARDALIENFleet].classList.add('EVANGUARDALIEN');
});

DMIDLANERALIENPosition.forEach((DMIDLANERALIENFleet) => {
  console.log(DMIDLANERALIENFleet);
  cells[DMIDLANERALIENFleet].classList.add('DMIDLANERALIEN');
});

cells[AHUMANTANKPosition].classList.add('AHUMANTANK');

//initial state alien and human

//const V = false;

//Ditribution
cells[AHUMANTANKPosition].classList.add('AHUMANTANK');
cells[AHUMANTANKPosition].classList.remove('AHUMANTANK');

cells[YTANKSHOTPosition].classList.add('YTANKSHOT');
cells[YTANKSHOTPosition].classList.remove('YTANKSHOT');

const EVANGUARDALIENTimming = width;
const EVANGUARDALIENExplosion = EVANGUARDALIENTimming % 2;

const shoot = (AHUMANTANKPosition) => {
  let YTANKSHOTPosition = AHUMANTANKPosition;
  const interval = setInterval(() => {
    cells[YTANKSHOTPosition].classList.remove('YTANKSHOT');
    YTANKSHOTPosition -= width;
    cells[YTANKSHOTPosition].classList.add('YTANKSHOT');

    if (cells[YTANKSHOTPosition].classList.contains('EVANGUARDALIEN')) {
      clearInterval(interval);
      cells[YTANKSHOTPosition].classList.remove('YTANKSHOT');

      cells[YTANKSHOTPosition].classList.remove('EVANGUARDALIEN');
      cells[YTANKSHOTPosition].classList.add('ALIENEXPLOSION');
      setTimeout(
        () => cells[YTANKSHOTPosition].classList.remove('ALIENEXPLOSION'),
        200,
      );
    }
    if (cells[YTANKSHOTPosition].classList.contains('DMIDLANERALIEN')) {
      clearInterval(interval);
      cells[YTANKSHOTPosition].classList.remove('YTANKSHOT');
      cells[YTANKSHOTPosition].classList.remove('DMIDLANERALIEN');
      cells[YTANKSHOTPosition].classList.add('ALIENEXPLOSION');
      setTimeout(
        () => cells[YTANKSHOTPosition].classList.remove('ALIENEXPLOSION'),
        200,
      );
    }
    if (YTANKSHOTPosition < width) {
      cells[YTANKSHOTPosition].classList.remove('YTANKSHOT');
      clearInterval(interval);
    }
  }, 500);
};

const handleKeyPress = (event) => {
  const { key } = event;

  const x = AHUMANTANKPosition % 10;
  // let YTANKSHOTPosition = AHUMANTANKPosition;
  // 3 - Mover a Bchu de un cuadro al otro dependiendo la orientación y la dirección
  //  3.1  ¿Cómo puedo saber en que coordenas Bchu se encuentra?

  cells[AHUMANTANKPosition].classList.remove('AHUMANTANK');
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

    case 'w':
      shoot(AHUMANTANKPosition);
      break;
  }
  cells[AHUMANTANKPosition].classList.add('AHUMANTANK');
};
cells[AHUMANTANKPosition].classList.add('AHUMANTANK');

window.addEventListener('keyup', handleKeyPress);
