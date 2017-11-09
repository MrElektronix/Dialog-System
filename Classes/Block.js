class Block {
	constructor(x, y, width, height, innerhtml) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.innerhtml = innerhtml;
		
		
		this.div = document.createElement('div');
		this.node_background;
		this.isDown = false;
		this.offset = [0, 0];
		this.mousePosition = {};
		
		
		this.init();
		
		let self = this;
	}
	
	
	init() {
		let xString  = this.x.toString();
		let yString = this.y.toString();
		let widthString = this.width.toString();
		let heightString = this.height.toString();
		
		this.div.innerHTML = this.innerhtml;
		this.div.style.textAlign = "center";
		this.div.style.position = "absolute";
		this.div.style.border = "solid black 2px";
		this.div.style.backgroundColor = "#FF1493"
		this.div.style.borderRadius = "5px";
		this.div.style.width = widthString + "px";
		this.div.style.height = heightString + "px";
		this.div.style.top = yString + "px";
		this.div.style.left = xString + "px";
		
		
		this.div.addEventListener('mouseup', this.MouseUp);
		this.div.addEventListener('mousedown', this.MouseDown);
		this.div.addEventListener('mousemove', this.MouseMove);

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