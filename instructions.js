myGame.instructions= function(game) {};
myGame.instructions.prototype= {
	create: function(){
		this.add.sprite(0, 0, 'instructions');
		this.st1Button= this.add.button(385, 500, 'gameButton', this.startGame, this, 1,0);
		this.st1Button.anchor.set(0.5, 0.5);
	},
	startGame: function(){
		this.game.state.start('playGame');
	//	this.game.state.start('demo');
	}
};