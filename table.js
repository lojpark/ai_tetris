function initTable( table ){
	var k, i, j;
	
	table[0] = 12;
	for( k = 1; k <= table[0]; k++ ){
		table[k] = new Array();
		for( i = 0; i <= 16; i++ ){
			table[k][i] = new Array();
			for( j = 0; j <= 11; j++ ){
				table[k][i][j] = 0;
			}
			table[k][i][0] = table[k][i][11] = 2;
		}
		for( j = 0; j <= 11; j++ ){
			table[k][0][j] = 2;
			table[k][16][j] = 2;
		}
	}
};

function eraseLine( table ){
	var i, j, k;
	
	for( k = 1; k <= table[0]; k++ ){
		for( i = 1; i <= 15; i++ ){
			for( j = 1; j <= 10; j++ ){
				if( table[k][i][j] == 0 ){
					j = 0;
					break;
				}
			}
			if( j != 0 ){
				for( j = 1; j <= 10; j++ ){
					table[k][i][j] = 0;
					table[k][0][0] = 486;
				}
			}
		}
	}
};
function clearTable( t ){
	var i, j, k;
	
	for( i = 1; i <= 15; i++ ){
		for( j = 1; j <= 10; j++ ){
			if( t[i][j] != 0 ){
				j = 0;
				break;
			}
		}
		if( j != 0 ){
			for( k = i; k >= 2; k-- ){
				for( j = 1; j <= 10; j++ ){
					t[k][j] = t[k-1][j];
				}
			}
			for( j = 1; j <= 10; j++ ){
				t[1][j] = 0;
			}
		}
	}
};
function moveTable( table ){
	var i, j, k;
	
	eraseLine( table );
	for( k = 1; k <= table[0]; k++ ){
		if( table[k][0][0] == 486 ){
			clearTable( table[k] );
			table[k][0][0] = 0;
		}
	}
};

function printTable( table, form, img, context ){
	var k, i, j;
	var sx = -10, sy = 50;
	
	if( table[0] == 2 ){
		/* 2인 */
		for( k = 1; k <= table[0]; k++ ){
			context.fillStyle = "rgb(0,0,0)";
			context.fillRect( sx+22, sy+22, 220, 330 );
			
			if( form[k].die ) context.fillStyle = "rgb(32,32,32)";
			else context.fillStyle = "rgb(255,255,255)";
			
			for( i = 1; i <= 15; i++ ){
				for( j = 1; j <= 10; j++ ){
					if( table[k][i][j] == 1 ){
						context.fillRect( sx + j*22, sy + i*22, 20, 20 );
					}
				}
			}
			sx += 320;
		}
	}
	else{
		/* 12인 */
		sx = -10, sy = 0;
		for( k = 1; k <= table[0]; k++ ){
			context.fillStyle = "rgb(0,0,0)";
			context.fillRect( sx+15, sy+15, 150, 225 );
			
			if( form[k].die ) context.fillStyle = "rgb(32,32,32)";
			else context.fillStyle = "rgb(255,255,255)";
			
			for( i = 1; i <= 15; i++ ){
				for( j = 1; j <= 10; j++ ){
					if( table[k][i][j] == 1 ){
						context.fillRect( sx + j*15, sy + i*15, 13, 13 );
					}
				}
			}
			
			context.fillStyle = "rgb(255,0,0)";
			context.font = "8px helvetica";
			for( i = 1; i <= 4; i++ ){
				context.fillText( Math.floor(form[k].gene[i]*10)/10, sx+30*i, sy+30 );
			}
			for( i = 5; i <= 8; i++ ){
				context.fillText( Math.floor(form[k].gene[i]*10)/10, sx+30*(i-4), sy+45 );
			}
			for( i = 9; i <= 12; i++ ){
				context.fillText( Math.floor(form[k].gene[i]*10)/10, sx+30*(i-8), sy+60 );
			}
			context.fillText( form[k].blockNumber, sx+30, sy+75 );
			
			sx += 160;
			if( sx > 480 ){
				sx = -10;
				sy += 230;
			}
		}
		
		context.fillStyle = "rgb(255,0,0)";
		context.font = "12px helvetica";
		context.fillText( form[0].generation + "세대", 10, 12 );
	}
};