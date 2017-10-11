class answerBlock{
	constructor() {
		this.block;

		this.htmlID = "lockanswer";
		
		this.player = new playerBlock();
		this.lockanswer;
		this.answer;
	}
	
	init(){
		//this.idCount += 1;
		//this.htmlID = "lockanswer" + this.idCount;
		
		this.block = new Block(250, 220, 250, 80,  '<form >' +
												'Answer: <input type="text" style="width:140px; margin-top:10px;" id="answer"/>' +
												'<input type="button" value="Lock Answer" id="'+this.htmlID+'"/>' +
                 								'</form>');
		this.block.node_background = document.getElementById("node_background");
		this.block.node_background.appendChild(this.block.div);

		this.lockanswer = document.getElementById(this.htmlID);
		this.lockanswer.addEventListener('click', this.saveAnswer);
		this.player.update();
		
	}
	
	/*
	
	getAnswer() {
		return this.answer;
	}
	*/
	
	saveAnswer(){
		console.log("hallo");
		this.answer = document.getElementById("answer");
		console.log(this.answer.value);
	}
	
	
}