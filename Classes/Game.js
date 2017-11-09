class Game {
	constructor(sceneWidth, sceneHeight, canvas, context) {
		this.sceneWidth = sceneWidth;
		this.sceneHeight = sceneHeight;
		this.canvas = canvas;
		this.context = context;
		
		this.addPlayerButton;
		this.addQuestionButton;
		this.addAnswerButton;
		this.saveButton;
		
		this.playerblock;
		this.questionblock;
		this.answerblock;
		
		this.questionInputID = "question";
		this.questionIDNumber = 0;
		this.questionBlocks = [];
		this.questionValues = [];
		
		this.answerInputID = "answer";
		this.answerIDNumber = 0;
		
		this.start();
	}

	start() {
		this.canvas.width = this.sceneWidth;
		this.canvas.height = this.sceneHeight;
		
		
		this.addPlayerButton = document.getElementById("add_player");
		this.addPlayerButton.addEventListener('click', ()=>{this.createPlayerBlock()});
	
		this.addQuestionButton = document.getElementById("add_question");
		this.addQuestionButton.addEventListener('click', ()=>{this.createQuestionBlock()});
	
		this.addAnswerButton = document.getElementById("add_answer");
		this.addAnswerButton.addEventListener('click', ()=>{this.createAnswerBlocks()});
		
		this.saveButton = document.getElementById("save_all");
		this.saveButton.addEventListener('click', ()=>{this.Save()});
		
	}

	createPlayerBlock() {
		this.playerblock = new playerBlock();
	}
	
	createQuestionBlock() {
		this.questionIDNumber += 1;
		let newID = this.questionInputID + this.questionIDNumber;
		this.questionblock = new questionBlock(newID);
		this.questionBlocks.push(this.questionblock);
	}
	
	createAnswerBlocks(){
		this.answerIDNumber += 1;
		let newID = this.answerInputID + this.answerIDNumber;
		this.answerblock = new answerBlock(newID);
	}
	
	Save(){
		
		
		
		
		for (let i = 0; i < this.questionBlocks.length; i++){
			/*
			let string = this.questionblock[i].inputID;
			let substring = string.substring(8,9);
			let stringID = substring - 1;
			
			if (stringID == )
			
			this.questionValues.push(this.questionblock[i].getQuestionValue());
			
			if (this.questionBlocks[i].getQuestionValue() === "") {
				console.log("empty");
			} else{
			
				this.checkQuestions(this.questionBlocks[i]);
			}
			*/
				
		}
		
		//console.log(this.questionblock.getQuestionValue());
		/*
		let string = this.questionblock.inputID;
		let substring = string.substring(8,9);
		let stringID = substring - 1;
		
		if (this.questionValues.length >= 1) {
			for(let i = 0; i < this.questionValues.length; i++){
			
				console.log("Question" + i + ": " + this.questionValues[i]);
			}
		} else{
			this.questionValues.push(this.questionblock.getQuestionValue());
		}
		
		*/
	}
	
	checkQuestions(block) {
		//let string = this.questionblock.inputID;
		//let substring = string.substring(8,9);
		//let stringID = substring - 1;
		
		this.questionValues.push(block.getQuestionValue());
		
		
		for (let i = 0; i < this.questionValues.length; i++){
			console.log(i + ": " + this.questionValues[i]);
		}
	
	}
	
}
