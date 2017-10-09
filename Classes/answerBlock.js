class answerBlock {
	constructor() {
		this.div = document.createElement('div');
		this.node_background;
		this.isDown = false;
		this.offset = [0, 0];
		this.mousePosition = {};
		
		this.lockanswer;
		this.answer;
	}
	
	init(){
		
		this.div.innerHTML = '<form >' +
								'Answer: <input type="text" style="width:140px; margin-top:10px;" id="answer"/>' +
								'<input type="button" value="Lock Answer" id="lockanswer"/>' +
                 			'</form>';
				
		this.div.style.textAlign = "center";
		this.div.style.position = "absolute";
		this.div.style.width = "250px";
		this.div.style.height = "80px";
		this.div.style.border = "solid black 2px";
		this.div.style.top = "220px";
		this.div.style.left = "250px";
		

		this.node_background = document.getElementById("node_background").appendChild(this.div);
		
		this.lockanswer = document.getElementById("lockanswer");
		
		this.div.addEventListener('mouseup', this.MouseUp);
		this.div.addEventListener('mousedown', this.MouseDown);
		this.div.addEventListener('mousemove', this.MouseMove);
		
		this.lockanswer.addEventListener('click', this.saveAnswer);
		
	}
	
	getAnswer() {
		return this.answer;
	}
	
	saveAnswer(){
		console.log("hallo");
		this.answer = document.getElementById("answer");
		console.log(this.answer.value);
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