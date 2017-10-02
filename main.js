let canvas, context;
let game;



let Init = ()=> {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	game = new Game(600, 400, canvas, context);
	
	
	
	Update();
}


let Update = ()=> {
	context.clearRect(0, 0, canvas.width, canvas.height);
	requestAnimationFrame(Update);
}


Init();