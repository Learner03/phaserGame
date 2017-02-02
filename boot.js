var myGame = {            
	_WIDTH: 800,
	_HEIGHT: 600
};

myGame.boot = function(game) {};

myGame.boot.prototype = {
	preload: function() {
		this.load.image('startPage', 'assets/startPage.png');
	}, 
	create: function() {
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.state.start('preloader');
	}
};