// Do a grid it fill all the screen on cells to guide the scipts by each movements they must do by all the screen.

//// ARRAYS LIST ////

const cells = [];
let dMidLanerAlien = [13, 14, 15, 16, 17, 23, 24, 25, 26, 27];
let eVanguardAlien = [33, 34, 35, 36, 37, 43, 44, 45, 46, 47];
let mdIndex = [53, 54, 55, 56, 57];

//// VARIABLES LIST ////

const width = 10;
const height = width;
const cellCount = width * height;
const grid = document.querySelector('.grid');
const score = document.querySelector('span');
let aHumanTankPosition = 94;
let yTankShotPosition = aHumanTankPosition;
let resultado = 0;
let shooterAreas = mdIndex[Math.floor(Math.random() * mdIndex.length)];
let xAlienShootPosition = shooterAreas;

//// The code do a FOR loop to increase index value until the wanted N of cell to introduce text by the grill ////

for (let index = 0; index < cellCount; index++) {
  const cell = document.createElement('div');
  grid.appendChild(cell);
  cells.push(cell);
}
//// Alien vanguard fleet image spaceship clonning ////

eVanguardAlien.forEach((eVanguardAlienFleet) => {
  cells[eVanguardAlienFleet].classList.add('EVANGUARDALIEN');
});

//// Alien midliner fleet image spaceship clonning ////

dMidLanerAlien.forEach((DMIDLANERALIENFleet) => {
  cells[DMIDLANERALIENFleet].classList.add('DMIDLANERALIEN');
});

///// Human tank add in the human rising /////

cells[aHumanTankPosition].classList.add('AHUMANTANK');

//// Tank adding elements ////

cells[aHumanTankPosition].classList.add('AHUMANTANK');
cells[aHumanTankPosition].classList.remove('AHUMANTANK');

cells[yTankShotPosition].classList.add('YTANKSHOT');
cells[yTankShotPosition].classList.remove('YTANKSHOT');

//// Human tank bomb shot animations ////

const shoot = (aHumanTankPosition) => {
  let yTankShotPosition = aHumanTankPosition;
  const interval = setInterval(() => {
    cells[yTankShotPosition].classList.remove('YTANKSHOT');
    yTankShotPosition -= width;
    cells[yTankShotPosition].classList.add('YTANKSHOT');

    if (cells[yTankShotPosition].classList.contains('EVANGUARDALIEN')) {
      resultado += 10;
      score.textContent = resultado;
      clearInterval(interval);
      cells[yTankShotPosition].classList.remove('YTANKSHOT');
      cells[yTankShotPosition].classList.remove('EVANGUARDALIEN');
      cells[yTankShotPosition].classList.add('ALIENEXPLOSION');
      setTimeout(
        () => cells[yTankShotPosition].classList.remove('ALIENEXPLOSION'),
        50,
      );
    }
    if (cells[yTankShotPosition].classList.contains('DMIDLANERALIEN')) {
      resultado += 20;
      score.textContent = resultado;
      clearInterval(interval);
      cells[yTankShotPosition].classList.remove('YTANKSHOT');
      cells[yTankShotPosition].classList.remove('DMIDLANERALIEN');
      cells[yTankShotPosition].classList.add('ALIENEXPLOSION');
      setTimeout(
        () => cells[yTankShotPosition].classList.remove('ALIENEXPLOSION'),
        50,
      );
    }
    if (yTankShotPosition < width) {
      cells[yTankShotPosition].classList.remove('YTANKSHOT');
      clearInterval(interval);
    }
    if (resultado == 300) {
      alert('You won the game, congratulations!');
      score.textContent = 0;
    }
  }, 100);
};

//// Alien shooter spaceship animation laser bombs ////

const alienshoot = (shooterAreas) => {
  let xAlienShootPosition = shooterAreas;
  const interval2 = setInterval(() => {
    cells[xAlienShootPosition].classList.remove('XALIENSHOT');
    xAlienShootPosition += height;
    cells[xAlienShootPosition].classList.add('XALIENSHOT');

    if (cells[xAlienShootPosition].classList.contains('AHUMANTANK')) {
      clearInterval(interval2);
      cells[xAlienShootPosition].classList.remove('XALIENSHOT');
      cells[xAlienShootPosition].classList.remove('AHUMANTANK');
      cells[xAlienShootPosition].classList.add('HUMANEXPLOSION');
      setTimeout(
        () => cells[xAlienShootPosition].classList.remove('HUMANEXPLOSION'),
        100,
      );
    }
    if (xAlienShootPosition > 99) {
      cells[xAlienShootPosition].classList.remove('XALIENSHOT');
      clearInterval(interval2);
    }
  }, 100);
};

//// key function reader ////
const handleKeyPress = (event) => {
  const { key } = event;

  const x = aHumanTankPosition % 10;

  /// key-board reader to do actions ///
  cells[aHumanTankPosition].classList.remove('AHUMANTANK');
  switch (key) {
    case 'ArrowRight':
      if (x < width - 1) {
        aHumanTankPosition++;
      }
      break;
    case 'ArrowLeft':
      if (x > 0) {
        aHumanTankPosition--;
        console.log('TANQUEMOVIENDOSE');
      }
      break;

    case 'w':
      shoot(aHumanTankPosition);
      shooterAreas = mdIndex[Math.floor(Math.random() * mdIndex.length)];
      alienshoot(shooterAreas);
      console.log(mdIndex);
  }
  cells[aHumanTankPosition].classList.add('AHUMANTANK');
};
cells[aHumanTankPosition].classList.add('AHUMANTANK');

window.addEventListener('keyup', handleKeyPress);
