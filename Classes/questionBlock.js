class questionBlock {
	constructor() {
		this.div = document.createElement('div');
		this.node_background;
		this.isDown = false;
		this.offset = [0, 0];
		this.mousePosition = {};
		
		this.lockquestion;
		this.addanswers;
		
		this.question;
		this.answerblock;
		this.answer = [];
	}
	
	init(){
		
		this.div.innerHTML = '<form >' +
								'Question: <input type="text" style="width:140px; margin-top:10px;" id="question"/>' +
								'<input type="button" value="Lock Question" id="lockquestion"/>' +
								'<input type="button" value="Add Answers" id="addanswers"/>' +
                 			'</form>';
				
		this.div.style.textAlign = "center";
		this.div.style.position = "absolute";
		this.div.style.width = "250px";
		this.div.style.height = "80px";
		this.div.style.border = "solid black 2px";
		this.div.style.top = "120px";
		this.div.style.left = "250px";
		

		this.node_background = document.getElementById("node_background").appendChild(this.div);
		
		this.lockquestion = document.getElementById("lockquestion");
		this.addanswer = document.getElementById("addanswers");
		
		this.div.addEventListener('mouseup', this.MouseUp);
		this.div.addEventListener('mousedown', this.MouseDown);
		this.div.addEventListener('mousemove', this.MouseMove);
		
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
	
	*/
	
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
	
	saveQuestion(){
		this.question = document.getElementById("question");
		console.log(this.question.value);
	}
	
	createAnswerBlock() {
		this.answerblock = new answerBlock();
		this.answerblock.init();
	}
	
	MouseUp(){
		this.isDown = false;
		this.style.border = "solid black 2px";
	}
	
	MouseDown(event){
		this.isDown = true;
		this.offset = [
			this.offsetLeft - event.clientX,
			this.offsetTop - event.clientY
		]
		
		this.style.border = "solid red 2px";
	}
	
	MouseMove(event) {
		event.preventDefault();
		if (this.isDown) {
			this.mousePosition = {
				x: event.clientX,
				y: event.clientY
			}
			
			this.style.left = (this.mousePosition.x + this.offset[0]) + 'px';
			this.style.top = (this.mousePosition.y + this.offset[1]) + 'px';

		}
	}
}