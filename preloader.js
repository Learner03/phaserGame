myGame.preloader= function(game) {};
myGame.preloader.prototype= {
    preload: function(){
	
	    this.load.image('gameBackground', 'assets/background.png');
		this.load.image('instructions', 'assets/instructions.png');
		this.load.image('tileBackground', 'assets/tileback.png');
		this.load.image('endPage', 'assets/endPage.png');
		this.load.image('contButton', 'assets/contButton.png');
		this.load.image('quitButton', 'assets/quitButton.png');
	//	this.load.image('startPage', 'assets/startPage.png');
		
		this.load.spritesheet('startButton', 'assets/startButton.png', 150, 50);
		this.load.spritesheet('gameButton', 'assets/startgameButton.png', 150, 50);
		this.load.spritesheet('sp1', 'assets/sprite1.png', 32, 32);
		this.load.spritesheet('sp2', 'assets/sprite2.png', 32, 32);
		this.load.spritesheet('sp3', 'assets/sprite3.png', 32, 32);
		this.load.spritesheet('sp4', 'assets/sprite4.png', 32, 32);
		
		this.load.json('Cdata', 'assets/gameLevels.json');
	},
	
	create: function(){
		this.game.state.start('mainPage');
	}
};