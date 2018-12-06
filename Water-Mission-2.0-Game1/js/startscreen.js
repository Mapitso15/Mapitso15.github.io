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

  }
  create() {
	
	 //background image
   this.add.sprite(0,0, 'back').setOrigin(0,0);
   gameText = this.add.text(250, 70, 'Water Mission 2.0', { fontSize: '45px', fill: '#ffffff'});  
     gameText = this.add.text(255, 175, 'Collect 20 rubies to complete mission', { fontSize: '20px', fill: '#ffffff'});  
	this.add.sprite(210,180, 'ruby');
   //click to start 
   /* var testText = this.add.text(120,380,'Click to start the game.',{
      fontSize: '32px',
      fill: '#FFF'
    });
    testText.setInteractive()
    testText.on('pointerdown',startGameplay)
	*/
	//button
	  var bg = this.add.image(230, 150, 'button');
	  
        var container = this.add.container(250, 160, [ bg]);

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
