myGame.end= function(game) {};
myGame.end.prototype= {
	create: function(){
		this.add.sprite(0, 0, 'endPage');
		this.add.button(180, 450, 'quitButton', this.quitFunc, this);
		this.add.button(380, 450, 'contButton', this.contFunc, this);
	},
	quitFunc: function(){
		location.reload(this);
	},
	contFunc: function(){
		this.game.state.playGame.setDisp();
	}
};