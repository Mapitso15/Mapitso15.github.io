
var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 650,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false,
            setBounds: false
        }
    },
    scene: [StartScreen, Level1]
};


var game = new Phaser.Game(config);
