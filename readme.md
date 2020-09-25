# The Game

///// CLASSIC SPACE INVADERS /////

## What is it?

//// MVP: MARK N => MARK ALPHA////

///MARK 1: A Human vs an Alien in the Far West Space ///

/// RESUME ///

Only an alien of the enemy-battleship start a fight vs an human tank in a typical gun duel.

### Tecnologies

It will be coded by DOM using HTML5, JavaScript and CSS.

MARK 1 MVP

// Do a grid it fill all the screen on cells to guide the scipts by each movements they must do by all the screen.
// Enter the image of human tank ('A') inside a player controllable row of cells ('T'>'U').
// Enter the image of alien spacship ('B') inside a cell in front of the humantank ('A')
// Link the sound of tank shot ('W'>'Y') to the humantank
// Link the sound of daft punk area to alien explosion picture ('|B')
// Human turret shot ('T'>'v')a rocket vs the Alien by space bar key press
// Rocket animation take out the troath of the canon, go away to far west space with a 1s cells speed
// Rocket arrive to the alien and alien change the animation to a explosion ('|B') (daft punk sound explosion delay 1s) (1s its the time rocket pass by the full screen far west space)

MARK ALPHA

// Programatically add non-visible 55 cells in a block and one more behind of this block
// Programmatically repeat sprites of 11 alien by each row of the differents fleet C(1 row), D(2 rows), E (2 rows) alien spaceship fleet and add the value price
// Develop a movement (right to left) to the spaceship behind the main block
// Each alien distroyed add different marks to the score depending its fleet
// Throw a tankshot since the human canon to the far west space
//....

## How to install

## How to run

# Documentation

        // INPUT //

GAMEPAD T boolean data =

/_JOYSTICK_/ U = data-key Arrow-key (left-arrow, up-arrow, down-arrow, rigth-arrow);

/_TURRET TRIGGER_/ V = data-key Space-bar;

INSERT COIN Q number data flex display =

/_Nº LIFES_/ R decreasive count 3 => 0 = human-tank lives score;

/_COINS INSERTED_/ S increasive count 00 => 99 = coins added;

SHOTFIRE W image data=

/_ALIEN BOMB_/ X, Once time shooted each 100ms change image bomb. It go forward and complete the Far West Space at 500ms less 33ms each full spaceship species zigzag movement.

/_HUMAN ROCKET_/ Y, Once time shooted It go forward and complete the full Far West Space at 1s maximum less 600ms or 500ms (depending the front or back row) if explode the VANGUARD ALIEN SPACESHIP, if explode MIDLANER ALIEN FLEET SPACESHIP quit 400ms or 300ms (depending the front or back row) the explosde and if explode the BACKLINER ALIEN FLEET SPACESHIP quit only 200ms.

        // OUTPUT //

ENEMY ALIEN BATTLESHIP B img data =

Do a left to right movement at the begining and invest the movement orientation each time arrive to a screen wall (zig zag). Alien spaceship do the zig zag movement through the cells of the grid until arrive to human tank row cells. Each battleship at the same time change from alien state 1 to the other alien state 2 animation to do a step, and all of them return to A alien state, begining a new cicle of a loop.

/_VANGUARD ALIEN FLEET SPACESHIP_/ E, It is the first animation alien spaceship to follow the zig zag movement.

/_MIDLANER ALIEN FLEET SPACESHIP_/ D, It is the second animation alien spaceship to follow the zig zag movement.

/_BACKLINER ALIEN FLEET SPACESHIP_/ C, It is the last animation alien spaceship to follow the zig zag movement.

/_RANDOM ALIENT SPACESHIP_/ H, It is

/_DEAD ALIEN SPACESHIP_/ B > C.D.E.H, Human rocket image area invade alien image area and then alien img file change (explosion).

SCORE N number data =

flex inline display between its elements, block display to outfit elements =

/_SCORE Nº1_/ Ñ (increasive count 000000 => 999999)= points added;

/_HI SCORE_/ O (increasive count 000000 => 999999)= points added in all the matches of the player id is on now;

/_SCORE Nº2_/ P (increasive count 000000 => 999999)= points addedin the match played before;

HUMAN TANK A image data =

/_HUMAN TANK_/ It receive the movement and apliance

/_DEAD HUMAN TANK_/ Alien bomb image area invade human tank image area and then human img file change (explosion).

           // PASSIVE ELEMENTS //

DEFENSE WALLS F.G.H.I img data =

Gridsheet display (each alien bomb quit a piece of the defense wall damaged) or in a easier way flex display (each alien bomb bloqued by the defense wall quit it a shape or block to the defense wall) =

/_LDEFENSE WALLS_/ It is in left area

/_LMDEFENSE WALLS_/ It is in middle left area

/_RMDEFENSE WALLS_/ It is in middle right area

/_RDEFENSE WALLS_/ It is in right area
