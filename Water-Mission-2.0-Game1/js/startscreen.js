class StartScreen extends Phaser.Scene {
  constructor() {
    super({
      key: 'startscreen'
    });
  }
  preload() {
    console.log("Start screen");
this.load.image ('back', 'assets/scuba-water.jpg');
this.load.image('button', 'assets/button1.png');
this.load.image('ruby', 'assets/ruby.png');
this.load.image('karrow', 'assets/karrow.png');
  }
  create() {

	 //background image
   this.add.sprite(0,0, 'back').setOrigin(0,0);
   //header text
   gameText = this.add.text(250, 70, 'Water Mission 2.0', { fontSize: '45px', fill: '#ffffff'});
   //Instructions
   gameText = this.add.text(255, 175, 'Collect 25 rubies to complete mission', { fontSize: '20px', fill: '#ffffff'});
	this.add.sprite(210,180, 'ruby');
	 gameText = this.add.text(265, 265, 'Use arrow keys to move the player.', { fontSize: '22px', fill: '#ffffff'});
	this.add.sprite(210,280, 'karrow');

	//button
	  var bg = this.add.image(220, 200, 'button');

        var container = this.add.container(250, 210, [ bg]);

        bg.setInteractive()
		bg.on('pointerdown',startGameplay)



  }
  update() {

  }
}
function startGameplay() {
    game.scene.stop('startscreen');
    game.scene.start('Level1');
}
