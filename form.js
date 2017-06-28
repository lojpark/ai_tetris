function initForm( form ){
	var i, j;
	
	form[0] = new Object();
	form[0].n = 12;
	form[0].generation = 1;
	for( i = 1; i <= form[0].n; i++ ){
		form[i] = new Object();
		form[i].eraseLine = 0;
		form[i].destX = form[i].destR = 0;
		form[i].blockNumber = 0;
		form[i].die = false;
		form[i].gene = new Array();
		for( j = 1; j <= 8; j++ ){
			form[i].gene[j] = Math.random()*2;
		}
		form[i].gene[9] = Math.random()*10;
		form[i].gene[10] = Math.random()*20;
		form[i].gene[11] = Math.random()*15;
		form[i].gene[12] = Math.random()*10;
	}
};