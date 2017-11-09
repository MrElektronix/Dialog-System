class answerBlock {
	constructor(inputID) {
		this.inputID = inputID;
		this.answervalue;
		this.block;
		
		this.init();
	}
	
	init(){
		
		this.block = new Block(250, 220, 250, 80,  '<form onSubmit="return false;">' +
												'Answer: <input type="text" style="width:140px; margin-top:10px;" id="'+this.inputID+'"/>' +
                 								'</form>');
		this.block.node_background = document.getElementById("node_background");
		this.block.node_background.appendChild(this.block.div);
		
	}
	
	
	getAnswerValue() {
		this.answervalue = document.getElementById(this.inputID).value;
	}
	

}