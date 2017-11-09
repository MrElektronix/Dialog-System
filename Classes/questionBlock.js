class questionBlock {
	constructor(inputID) {
		this.inputID = inputID;
		this.questionvalue;
		this.block;
		
		
		this.blockValue;
		this.init();
		
	}
	
	init(){
		this.block = new Block(250, 120, 250, 80, '<form onSubmit="return false;">' +
								'Question: <input type="text" style="width:140px; margin-top:10px;" id="'+this.inputID+'"/>' +
							   	
                 			'</form>');
			
		this.block.node_background = document.getElementById("node_background")
		this.block.node_background.appendChild(this.block.div);
	}

	
	/*
	
	Player = {
		sprite: "sprite.png",

		questions: [
			{
				question: "mag ik kaas",
				answers: [
					"ja",
					"nee",
					"ik ben ook een klant"
				],
				correctAnswer: 2
			}	
		],
		
		qa1: {
			question1: "what is wrong with you?",
			answer1: "im mentally ill",
			answer2: "im just a turtle",
			answer3: "what? i just really love peanut butter"
		},
		
		qa2: {
		
		}
	}
	
	Player.questions[0].question;
	Player.questions.push({
		question: "",
		answers: ["", ""],
		correctAnswer: 1
	})
	
	
	
	getQuestion() {
		
		
		return {
			question: this.question,
			answers: this.answers,
			correctAnswer: this.correctAnswer
		}
	}
	
	getAnswers() {
		for() {
			this.answers.push(...getAnswer());
		}
	}
	*/
	
	
	getQuestionValue(){
		this.questionvalue = document.getElementById(this.inputID).value;
	
		return this.questionvalue;
	}
}