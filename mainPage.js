myGame.mainPage= function(game) {};
myGame.mainPage.prototype= {
	create: function(){
		this.add.sprite(0, 0, 'startPage');
		this.stButton= this.add.button(385, 500, 'startButton', this.showInstructions, this, 1, 0);
		this.stButton.anchor.set(0.5, 0.5);
	},
	showInstructions: function(){
		this.game.state.start('instructions');
	}
};