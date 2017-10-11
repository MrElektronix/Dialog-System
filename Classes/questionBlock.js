class questionBlock {
	constructor() {
		
		this.block;
		this.lockquestion;
		this.addanswers;
		
		//this.question;
		this.answerblock;
		//this.answer = [];
	}
	
	init(){
		this.block = new Block(250, 120, 250, 80, '<form >' +
								'Question: <input type="text" style="width:140px; margin-top:10px;" id="question"/>' +
								'<input type="button" value="Lock Question" id="lockquestion"/>' +
								'<input type="button" value="Add Answers" id="addanswers"/>' +
                 			'</form>');
			
		this.block.node_background = document.getElementById("node_background")
		this.block.node_background.appendChild(this.block.div);
		
		this.lockquestion = document.getElementById("lockquestion");
		this.addanswer = document.getElementById("addanswers");
		
		this.lockquestion.addEventListener('click', this.saveQuestion);
		this.addanswer.addEventListener('click', this.createAnswerBlock);
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
	
	saveQuestion(){
		this.question = document.getElementById("question");
		console.log(this.question.value);
	}
	
	createAnswerBlock() {
		this.answerblock = new answerBlock();
		this.answerblock.init();
	}
}