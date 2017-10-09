class playerBlock {
	constructor(){
		this.div = document.createElement('div');
		this.node_background;
		this.isDown = false;
		this.offset = [0, 0];
		this.mousePosition = {};
		
		this.addquestion;
		this.lockplayer;
		this.deleteblock;
		
		
		this.questionblock;
		
		let self = this;
		
	}
	
	init(){
		this.div.innerHTML = '<select id="selection" style="margin-top:10px;">' +
								'<option value="spiderman">Spiderman</option>' +
								'<option value="pinguin">Pinguin</option>' +
                 			'</select>' + 
							'<form style="margin-top:20px;">' +
								'<input type="button" value="Lock Player" id="lockplayer"/>' +
								'<input type="button" value="Add Question" id="addquestion"/>' +
								/*
								'<input type="button" value="Delete Block" id="deleteblock"/>' +
								*/
							'</form>';
			
			
							
							
		this.div.style.textAlign = "center";
		this.div.style.position = "absolute";
		this.div.style.width = "120px";
		this.div.style.height = "120px";
		this.div.style.border = "solid black 2px";
		this.div.style.top = "120px";
		this.div.style.left = "80px";
		

		this.node_background = document.getElementById("node_background").appendChild(this.div);
		
		this.lockplayer = document.getElementById("lockplayer");
	
		//this.deleteblock = document.getElementById("deleteblock");
		this.addquestion = document.getElementById("addquestion");
		this.addquestion.style.visibility = "hidden";
		
		this.div.addEventListener('mouseup', this.MouseUp);
		this.div.addEventListener('mousedown', this.MouseDown);
		this.div.addEventListener('mousemove', this.MouseMove);
		
		this.lockplayer.addEventListener('click', this.lockPlayer);
		this.addquestion.addEventListener('click', this.createQuestionBlock);
		//this.deleteblock.addEventListener('click', this.deleteBlock);
		
		
		
	}
	
	lockPlayer() {
		let selection = document.getElementById("selection");
		selection.disabled = "disabled";
		this.disabled = "disabled";
		self.addquestion.style.visibility = "visible";
	}
	
	createQuestionBlock() {
		this.questionblock = new questionBlock();
		this.questionblock.init();
		this.disabled = "disabled";
		JSON.stringify(this.questionblock.getQuestion());
	}
	
	deleteBlock() {
		
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