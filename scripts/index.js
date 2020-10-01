// Do a grid it fill all the screen on cells to guide the scipts by each movements they must do by all the screen.

const width = 10;
const height = width;

const cellCount = width * height;

const grid = document.querySelector('.grid');
const score = document.querySelector('span');
const cells = [];
let AHUMANTANKPosition = 94;
let YTANKSHOTPosition = AHUMANTANKPosition;
let DMIDLANERALIENPosition = [13, 14, 15, 16, 17, 23, 24, 25, 26, 27];
let EVANGUARDALIENPosition = [33, 34, 35, 36, 37, 43, 44, 45, 46, 47];
// The code do a loop to increase index value until the wanted N to introduce text at each grill
Math.floor(Math.random() * EVANGUARDALIENPosition);
let resultado = 0;

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

//Ditribution
cells[AHUMANTANKPosition].classList.add('AHUMANTANK');
cells[AHUMANTANKPosition].classList.remove('AHUMANTANK');

cells[YTANKSHOTPosition].classList.add('YTANKSHOT');
cells[YTANKSHOTPosition].classList.remove('YTANKSHOT');

//scoreText = game.add.text(5, 5, 'Points: 0', {
//  font: '18px Arial',
//  fill: '#0095DD',
//});

//function YTANKSHOTHitEVANGUARDALIEN(YTANKSHOT, EVANGUARDALIEN) {
//  EVANGUARDALIEN.kill();
//  score += 10;
//  scoreText.setText('Points: ' + score);
//  console.log('evanguardalienexplosion');
//}
//const V = false;

//for (i = 0; i < EVANGUARDALIEN.children.length; i++) {
// if (EVANGUARDALIEN.children[i].alive == true) {
//  count_alive++;
//  console.log(count_alive);
//}
//}
//if (count_alive == 40) {
//alert('You won the game, congratulations!');
//  location.reload();
//}

const EVANGUARDALIENTimming = width;
const EVANGUARDALIENExplosion = EVANGUARDALIENTimming % 2;

const shoot = (AHUMANTANKPosition) => {
  let YTANKSHOTPosition = AHUMANTANKPosition;
  const interval = setInterval(() => {
    cells[YTANKSHOTPosition].classList.remove('YTANKSHOT');
    YTANKSHOTPosition -= width;
    cells[YTANKSHOTPosition].classList.add('YTANKSHOT');

    if (cells[YTANKSHOTPosition].classList.contains('EVANGUARDALIEN')) {
      resultado += 10;
      score.textContent = resultado;
      clearInterval(interval);
      cells[YTANKSHOTPosition].classList.remove('YTANKSHOT');

      cells[YTANKSHOTPosition].classList.remove('EVANGUARDALIEN');
      cells[YTANKSHOTPosition].classList.add('ALIENEXPLOSION');
      setTimeout(
        () => cells[YTANKSHOTPosition].classList.remove('ALIENEXPLOSION'),
        50,
      );
    }
    if (cells[YTANKSHOTPosition].classList.contains('DMIDLANERALIEN')) {
      resultado += 20;
      score.textContent = resultado;
      clearInterval(interval);
      cells[YTANKSHOTPosition].classList.remove('YTANKSHOT');
      cells[YTANKSHOTPosition].classList.remove('DMIDLANERALIEN');
      cells[YTANKSHOTPosition].classList.add('ALIENEXPLOSION');
      setTimeout(
        () => cells[YTANKSHOTPosition].classList.remove('ALIENEXPLOSION'),
        50,
      );
    }
    if (YTANKSHOTPosition < width) {
      cells[YTANKSHOTPosition].classList.remove('YTANKSHOT');
      clearInterval(interval);
    }
    if (resultado == 300) {
      alert('You won the game, congratulations!');
      score.textContent = 0;
    }
  }, 100);
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
