
var map;
var player;
var cursors;
var platforms;
var gameText;
var gameOver = false;
var score = 0;
var scoreText;
var groundLayer;
var rubyLayer;
var ruby;
var collectStar;
//score test
var highscore;
var scoreDisplay;
var highScoreText;

class Level1 extends Phaser.Scene {
	constructor() {
		super ({key:"Level1"});
	}

preload()
{
	 this.load.image ('ocean', 'assets/under3.png');
	 this.load.image('player', 'assets/scubac11.png');
	 this.load.image('ground', 'assets/coral.png');
	 this.load.image('obstacle1', 'assets/shipwreck1.png' );
	 this.load.image('enemy1', 'assets/octup1.png');
	 this.load.image('enemy2', 'assets/seahorse1.png');
	 this.load.image('ruby', 'assets/ruby.png');
	 this.load.image('fish', 'assets/shark12.png');
	 this.load.image('ruby', 'assets/yellowdiamond1.png');
	 this.load.image('rock1', 'assets/rocklayer1.png');
	 this.load.image('rock2', 'assets/rocklayer2.png');
	 this.load.image('float', 'assets/float.png');
	 this.load.image('reefrock', 'assets/reefrock.png');
	 this.load.image('ship2', 'assets/shipwreck2.png');
	 this.load.image('playbutton', 'assets/playagain.png');

	}

create()
	{

	 //background image
	this.add.sprite(0,0, 'ocean').setOrigin(0,0);


	//Player

	player = this.physics.add.sprite(100, 700, 'player');

	player.setCollideWorldBounds(true);


	 cursors = this.input.keyboard.createCursorKeys();

	//  Setting the camera and physics bounds
	this.cameras.main.setBounds(0, 0, 2400 , 650);
	this.physics.world.setBounds(0, 0, 2400 , 650);

	//camera setting for Player

		this.cameras.main.startFollow(player);

	//group for enemies

	this.physics.world.gravity.y = 60;

    var group = this.physics.add.group({
			defaultKey: 'enemy1',
			bounceX: 1,
			bounceY: 1,
			collideWorldBounds: true
		});

    var group = this.physics.add.group({
			defaultKey: 'enemy2',
			bounceX: 1,
			bounceY: 1,
			collideWorldBounds: true
		});

    var group = this.physics.add.group({
			defaultKey: 'fish',
			bounceX: 1,
			bounceY: 1,
			collideWorldBounds: true
		});


	//creating groups for enemies

	  group.create(200, 300, 'enemy2').setVelocityX(280);
	  group.create(350, 300, 'enemy2').setGravity(2, 120);
	  group.create(1300, 300, 'enemy2').setGravity(0, -120);
	  group.create(1500, 300, 'enemy2').setGravity(0, -180);
	  group.create(550, 300, 'enemy1').setGravity(0, -120);
	  group.create(800, 300, 'enemy1').body.allowGravity = true;
	  group.create(1700, 300, 'enemy1').setVelocityX(280);
	  group.create(1200, 300, 'enemy1').body.allowGravity = true;
	 group.create(2100, 500, 'fish').setGravity(20, -180);


    //Adding rubies to the game
    ruby = this.physics.add.group({
        key: 'ruby',
        repeat: 80,
        setXY: { x: 100, y: 20, stepX: 80 }
    });

    ruby.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });


    //platform for rubies
	platforms = this.physics.add.staticGroup();
	this.physics.add.collider(ruby, platforms);
	this.physics.add.collider(player, platforms);
	//this.physics.add.overlap(player, fish, null, this);
	this.physics.add.overlap(player, ruby, collectRuby, null, this);
	this.physics.add.overlap(player, group, collectRuby1, null, this);

	//Adding objects that act as platforms
		platforms.create(350, 588, 'ground');
		platforms.create(1300, 280, 'ground');
		platforms.create(720, 270, 'rock1');
		platforms.create(100, 170, 'rock2');
		platforms.create(1000, 600, 'rock2');
		platforms.create(2200, 508, 'obstacle1');
		platforms.create(1800, 230, 'rock1');
		platforms.create(1500, 580, 'rock2');







//collison between player and enemies
function collectRuby1 (player, group)
{
    group.disableBody(true, true);
	 player.setTint(0xff0000);
		this.physics.pause();

scoreText.setText('Score: '+score);

	 //gameText = this.add.text(16, 16, 'GAME OVER',{fontSize:'80', fill:'#fffff'});
	 gameText = this.add.text(100, 150, 'GAME OVER', { fontSize: '100px', fill: '#FF0000', backgroundColor: '#000000' });
	 var bg = this.add.image(150, 200, 'playbutton');
	 gameOver = true;
    var container = this.add.container(250, 160, [ bg]);

        bg.setInteractive()
		bg.on('pointerdown',startGameplay)
      bg.setScrollFactor(0);
			score = 0;

	 function startGameplay() {
	game.scene.stop('Level1');
	game.scene.start('Level1');
    score = 0;
}

   gameText.setScrollFactor(0);

}


		//Score
	scoreText = this.add.text(70, 16, 'Score:' + score, { fontSize: '22px', fill: '#ffffff' });
	scoreText.fixedToCamera = true;
	scoreText.setScrollFactor(0);
	//collect rubies
	function collectRuby (player, ruby)
{
    ruby.disableBody(true, true);

     score += 5;

    scoreText.setText('Score: '+score);


	 //this.add.text(800, 16, 'Score:'+ score, { fontSize: '32px', fill: '#ffffff' });

   if (score === 125)
   {
      gameText = this.add.text(150, 150, 'Mission Complete!', { fontSize: '55px', fill: '#F00000', backgroundColor: '#ffffff' });
   gameText.setScrollFactor(0);
	 this.physics.pause();

	 var bg = this.add.image(200, 145, 'playbutton');
	 gameOver = true;
    var container = this.add.container(250, 160, [ bg]);
		 bg.setInteractive()
		bg.on('pointerdown',startGameplay)
      bg.setScrollFactor(0);

    score = 0;

   }

 function startGameplay() {
	game.scene.stop('Level1');
	 game.scene.start('startscreen');

	 }
    //scoreText.setText('Score: ' + score);
}
//high score text
	highScoreText = this.add.text(70, 40,
			'High Score: ' + highscore,
			{ font: "bold 20px Lato", fill: "#FFFFFF", align: "center" });
	highScoreText.setScrollFactor(0);
}




update ()
{
    player.setVelocity(10);

    if (cursors.left.isDown)
    {
        player.setVelocityX(-500);
        player.setFlipX(false);
        this.cameras.main.followOffsetX = 300;
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(500);
        player.setFlipX(false);
        this.cameras.main.followOffsetX = -300;
    }

    if (cursors.up.isDown)
    {
        player.setVelocityY(-500);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(500);
    }
    highScoreText.text = 'High Score: ' + localStorage.getItem("highscore"); {
        if (score > localStorage.getItem("highscore")) {
            localStorage.setItem("highscore", score);
        }
    }

    }
}
