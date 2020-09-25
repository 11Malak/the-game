# The Game

///// CLASSIC SPACE INVADERS /////

## What is it?

//// MVP ////

/// A Human vs an Alien in the Far West Space ///

/// RESUME ///

Only an alien of the enemy-battleship start a fight vs an human tank in a typical gun duel.

### Tecnologies

        // INPUT //

GAMEPAD T =

/_JOYSTICK_/ U boolean data = data-key Arrow-key (left-arrow, up-arrow, down-arrow, rigth-arrow);

/_TURRET TRIGGER_/ V boolean data = data-key Space-bar;

INSERT COIN Q =

/_Nº LIFES_/ R number data, flex display(decreasive count 3 => 0) = human-tank lives score;

/_COINS INSERTED_/ S number data, flex display (increasive count 00 => 99)= coins added;

        // OUTPUT //

ENEMY ALIEN BATTLESHIP B =

/_VANGUARD ALIEN FLEET SPACESHIP_/ E img data, gridsheet display (pika pen example), left to right movement at the begining and invest the movement orientation each time arrive to a screen wall (zig zag), It is the first animation alien battleship to move changing to EB or E2 alien state animation for a step it do and returning EA or E alien state to the next step, developing an alien animation loop with a state for each step it do.

/_MIDLANER ALIEN FLEET SPACESHIP_/ D img data, gridsheet display (pika pen example), left to right movement at the begining and invest the movement orientation each time arrive to a screen wall (zig zag), It is the second animation alien battleship to move changing to DB or D2 alien state animation for a step it do and returning DA or D alien state to the next step, developing an alien animation loop with a state for each step it do.

/_BACKLINER ALIEN FLEET SPACESHIP_/ C img data, gridsheet display (pika pen example), left to right movement at the begining and invest the movement orientation each time arrive to a screen wall (zig zag), It is the last animation alien battleship to move changing to CB or C2 alien state animation for a step it do and returning CA or C alien state to the next step, developing an alien animation loop with a state for each step it do.

/_DEAD ALIEN SPACESHIP_/ B > C.D.E.H img data,

SCORE N =

/_SCORE Nº1_/ Ñ number data, flex display (increasive count 000000 => 999999)= points added;

/_HI SCORE_/ O number data, flex display (increasive count 000000 => 999999)= points added in all the matches of the player id is on now;

/_SCORE Nº2_/ P number data, flex display (increasive count 000000 => 999999)= points addedin the match played before;

HUMAN TANK A =

/_HUMAN TANK_/ A img data,

/_DEAD HUMAN TANK_/

           // PASSIVE ELEMENTS //

/_DEFENSE WALLS_/ F.G.H.I img data, gridsheet display (each alien bomb quit a piece of the defense wall damaged) or in a easier way flex display (each alien bomb bloqued by the defense wall quit a shape or block to the defense wall)

## How to install

## How to run

# Documentation
