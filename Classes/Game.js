class Game {
  constructor(sceneWidth, sceneHeight, canvas, context) {
    this.sceneWidth = sceneWidth;
    this.sceneHeight = sceneHeight;
    this.canvas = canvas;
    this.context = context;

    this.start();
  }
	
  start() {
    this.canvas.width = this.sceneWidth;
    this.canvas.height = this.sceneHeight;
  }


}
