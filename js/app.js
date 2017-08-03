var score = 0;
document.getElementById("winner").innerHTML= 'score: ' + score;
// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y =y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 505){
        this.x += 100*dt;
    }else {
        this.x =-80;
    }

    if(this.x < player.x + 50 && this.x + 50 > player.x && this.y < player.y + 40 && this.y + 40 > player.y) {
        score = 0;
        document.getElementById('winner').innerHTML = 'score: ' + score;
        player.x = 200;
        player.y = 300;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x,y) {
    this.sprite = 'images/char-cat-girl.png';
    this.x = 200;
    this.y = 300;

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function() {
    if(this.y > 435) {
        this.y = 435;
    }

    if(this.x > 410) {
        this.x = 410;
    } else if(this.x < 0) {
        this.x = 0;
    }
    if (this.y < 10) {
        score++;
        document.getElementById("winner").innerHTML = 'score: ' + score;
        this.x = 200;
        this.y = 300;
    }
};

Player.prototype.handleInput = function(keyPress) {
    switch (keyPress) {
        case 'left':
            this.x -= 35;
            break;
        case 'right':
            this.x += 35;
            break;
        case 'up':
            this.y -= 35;
            break;
        case 'down':
            this.y += 35;
            break;
    }
};
// Now instantiate your objects.

var Enem1 = new Enemy(-50,20);
var Enem2 = new Enemy(-120,200);
var Enem3 = new Enemy(-170,100);
var Enem4 = new Enemy(-200,150);
var Enem5 = new Enemy(-400,50);
var Enem6 = new Enemy(-250,230);
var Enem7 = new Enemy(-300,200);
var Enem8 = new Enemy(-100,30);
var Enem9 = new Enemy(-700,220);
var Enem10 = new Enemy(-600,190);
// Place all enemy objects in an array called allEnemies

var allEnemies = [Enem1,Enem2,Enem3,Enem4,Enem5,Enem6,Enem7,Enem8,Enem9,Enem10]
// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
