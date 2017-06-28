$(document).ready(function(){
	var canvas = $("#myCanvas");
	var context = canvas.get(0).getContext("2d");
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();

	var FPS = 33;
	var key = new Object();
	var table = new Array();
	var block = new Array();
	var form = new Array();
	var nextBlock = new Array();
	
	var img = new Object();
//	img.player = new Image();
	//img.player.src = "image/player.png";
	
	document.onkeydown = function(e){
		var press_key = e || window.event;
		switch (press_key.keyCode) {			
			case 38: key.up = true; break;
			case 40: key.down = true; break;
			case 37: key.left = true; break;
			case 39: key.right = true; break;
		}
	};
	document.onkeyup = function(e){
		var press_key = e || window.event;
		switch (press_key.keyCode) {
			case 38: key.up = false; break;
			case 40: key.down = false; break;
			case 37: key.left = false; break;
			case 39: key.right = false; break;
			case 90:
				rotateBlockRight( block[1], table[1] );
				break;
			case 88:
				rotateBlockLeft( block[1], table[1] );
				break;
		}
	};
	document.onmousewheel = function (e) {
		var pkey = e || window.event;
		if( pkey.wheelDelta > 0 ){
			FPS++;
		}
		else{
			if( FPS > 1 ) FPS--;
		}
	};
	document.onclick = function (e) {
		newGene( table, block, form, nextBlock, true );
	};
	
	function init(){
		var i;
		
		key.up = key.down = key.left = key.right = false;
		
		initTable( table );
		initBlock( block );
		initForm( form );
		for( i = 0; i < 1000; i++ ){
			nextBlock[i] = Math.floor(Math.random()*7) + 1;
		}
		for( i = 1; i <= table[0]; i++ ){
			makeBlock( block[i], nextBlock[ form[i].blockNumber ] );
			form[i].blockNumber++;
		}
		
		animate();
	};

	function animate(){
		context.clearRect( 0, 0, canvasWidth, canvasHeight );
		
		newGene( table, block, form, nextBlock );
		
		moveBlocks( key, form, block, table, nextBlock );
		gravBlocks( block, table, form, nextBlock );
		
		moveTable( table );
		
		printTable( table, form, img, context );
		printBlocks( block, form, img, context );
		
		setTimeout(animate, FPS);
	};
	
	init();
});