class playerBlock {
	constructor(){
		
		this.questionBlock = [];
		this.answerBlocks = [];
		
		this.answerButtonID = 0;
		
		this.block;
		
		
		this.addquestion;
		this.lockplayer;
		this.deleteblock;
		
		
		this.questionblock;
		
	}
	
	init(){
		this.idCount += 1;
		this.block = new Block(80, 120, 120, 120, '<select id="selection" style="margin-top:10px;">' +
								'<option value="spiderman">Spiderman</option>' +
								'<option value="pinguin">Pinguin</option>' +
                 			'</select>' + 
							'<form style="margin-top:20px;">' +
								'<input type="button" value="Lock Player" id="lockplayer"/>' +
								'<input type="button" value="Add Question" id="addquestion"/>' +
								/*
								'<input type="button" value="Delete Block" id="deleteblock"/>' +
								*/
							'</form>');

		this.block.node_background = document.getElementById("node_background");
		this.block.node_background.appendChild(this.block.div);
		
		this.lockplayer = document.getElementById("lockplayer");
	
		//this.deleteblock = document.getElementById("deleteblock");
		this.addquestion = document.getElementById("addquestion");
		this.addquestion.style.visibility = "hidden";
		
		
		this.lockplayer.addEventListener('click', ()=>{
			this.lockPlayer();
		});
		this.addquestion.addEventListener('click', this.createQuestionBlock);
		//this.deleteblock.addEventListener('click', this.deleteBlock);
	}
	
	update() {
		console.log(this.questionBlock.answerblock);
	}
	
	lockPlayer() {
		let selection = document.getElementById("selection");
		selection.disabled = "disabled";
		
		this.lockplayer.disabled = "disabled";
		this.addquestion.style.visibility = "visible";
	
	}
	
	createQuestionBlock() {
		this.questionblock = new questionBlock();
		this.questionblock.init();
		this.disabled = "disabled";
		//JSON.stringify(this.questionblock.getQuestion());
	}
	
	deleteBlock() {
		
	}
}