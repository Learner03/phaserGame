myGame.playGame= function(game) {};
myGame.playGame.prototype= {
	create: function(){
		this.count= 0;
		this.score= 0;
		this.a= "";
		this.b= "";
		this.c= "";
		this.timer;
		this.sec= 50;
		this.arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
		
	    this.setDisp();
    },
	setDisp: function(){	
	    this.add.sprite(0, 0, 'gameBackground');
		this.add.sprite(145, 145, 'tileBackground');
		
		this.arr= this.shuffle(this.arr);
		console.log(this.arr);
		this.cordinateData= this.cache.getJSON('Cdata');
		
		for(var i=0; i<16; i++){
			this.x= this.cordinateData.platformData[i].x;
			this.y= this.cordinateData.platformData[i].y;
			if((this.arr[i]==0) || (this.arr[i]==1) || (this.arr[i]==2) || (this.arr[i]==3)){
				this.button = this.add.button(this.x, this.y, 'sp1', this.actionOnClick, this, 1,0,2);
				this.button.variable= "b1";   
			}
			else if((this.arr[i]==4) || (this.arr[i]==5) || (this.arr[i]==6) || (this.arr[i]==7)){
				this.button = this.add.button(this.x, this.y, 'sp2', this.actionOnClick, this, 1,0,2);	
				this.button.variable= "b2";
			}				
			else if((this.arr[i]==8) || (this.arr[i]==9) || (this.arr[i]==10) || (this.arr[i]==11)){
				this.button = this.add.button(this.x, this.y, 'sp3', this.actionOnClick, this, 1,0,2);	
				this.button.variable= "b3";
			}				
			else{
				this.button = this.add.button(this.x, this.y, 'sp4', this.actionOnClick, this, 1,0,2);	
				this.button.variable= "b4"; 
			}				
			this.button.anchor.setTo(0.5, 0.5);  //setting the anchor to the center
			this.button.scale.setTo(1.5, 1.5);
	    }
		
		this.text= this.add.text(10, 10, '', {fill:'#ffffff'});
		this.text.text= "Score: " + this.score; 
	
		this.timerDisp= this.add.text(590, 10, '', {fill:'#ffffff'});
		this.timerDisp.text= "Time left: " + this.sec;
	    
		this.timer = this.time.create(false);              //game.time.events.add(Phaser.Timer.SECOND * 100, stopTimer, this);
		this.timer.loop(1000, this.updateCounter, this);        //Set a TimerEvent to occur after each second
		this.timer.start();
	},
	
	updateCounter: function(){
		if(this.sec== 0){
			alert("Time's up!!!");
			location.reload(this);
		}
		else{
			this.sec--;
			this.timerDisp.text= "Time left: " + this.sec;
		}
	},
	shuffle: function(array){                             //The de-facto unbiased shuffle algorithm is the Fisher-Yates    
		var currentIndex= array.length;                   //(aka Knuth) Shuffle to shuffle elements of an array.
		var	temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	},
	actionOnClick: function(b1){
		b1.setFrames(2);
		this.count++;
		if(this.count== "1"){  
			this.c= b1;
			this.a= b1.variable;  	
		}
		else{
			this.b= b1.variable;
			if(this.a==this.b){
				this.score+= 10;
				if(this.score%80== 0){
					this.timer.stop();
					this.resetGame();
				}
			}
			else{
			this.c.setFrames(1, 0, 2);
			b1.setFrames(1, 0, 2); 
			}  
			this.text.text= "Score: " + this.score; 
			this.count=0;
		}
	},
	resetGame: function(){
		this.add.sprite(0, 0, 'endPage');
		this.add.button(180, 450, 'quitButton', this.quitFunc, this);
		this.add.button(380, 450, 'contButton', this.contButton, this);
	},
	quitFunc: function(){
		location.reload(this);
	},
	contButton: function(){
		this.sec= 50;
		this.setDisp();
	},
	update: function(){
	}
};