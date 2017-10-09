let canvas, context;
let game;
let add_player;
let playerblock;



let canvasButton;
let systemButton;
let tabContent;

let Init = ()=> {
	canvasButton = document.getElementById("canvas-button");
	systemButton = document.getElementById("system-button");
	
	add_player = document.getElementById("add_player");
	add_player.addEventListener('click', AddPlayer);
	
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	game = new Game(700, 450, canvas, context);
	canvasButton.addEventListener('click', openCanvas);
	systemButton.addEventListener('click', openSystem);
	
	
	Update();
}

let AddPlayer = ()=> {
	playerblock = new playerBlock();
	playerblock.init();
	add_player.disabled = "disabled";
}

let Update = ()=> {
	context.clearRect(0, 0, canvas.width, canvas.height);
	requestAnimationFrame(Update);
}


let openCanvas = ()=>{
	document.getElementById("canvasDiv").style.display = "block";
	document.getElementById("systemDiv").style.display = "none";
}

let openSystem = ()=>{
	document.getElementById("systemDiv").style.display = "block";
	document.getElementById("canvasDiv").style.display = "none";
}





Init();