class playerBlock {
	constructor(){
		this.block;
		
		
		this.init();
		
	}
	
	init(){
		this.block = new Block(80, 120, 120, 120, '<select id="selection" style="margin-top:10px;">' +
								'<option value="spiderman">Spiderman</option>' +
								'<option value="pinguin">Pinguin</option>' +
                 			'</select>'
							);
 
		this.block.node_background = document.getElementById("node_background");
		this.block.node_background.appendChild(this.block.div);
	}
}