function initBlock( block ){
	block[0] = 12;
	
	var k;
	for( k = 1; k <= block[0]; k++ ){
		block[k] = new Object();
		block[k].type = 0;
		block[k].rotate = 0;
		block[k].delayX = 0;
		block[k].delayY = 0;
		block[k].delayR = 0;
		block[k].x = new Array();
		block[k].y = new Array();
	}
};

function makeBlock( b, nbType ){
	b.delayX = b.delayY = b.delayG = 0;
	b.rotate = 0;
	b.type = nbType;
	if( b.type == 1 ){
		b.x[1] = 5; b.y[1] = 1;
		b.x[2] = 6; b.y[2] = 1;
		b.x[3] = 5; b.y[3] = 2;
		b.x[4] = 6; b.y[4] = 2;
	}
	if( b.type == 2 ){
		b.x[1] = 5; b.y[1] = 1;
		b.x[2] = 5; b.y[2] = 2;
		b.x[3] = 5; b.y[3] = 3;
		b.x[4] = 6; b.y[4] = 2;
	}
	if( b.type == 3 ){
		b.x[1] = 5; b.y[1] = 1;
		b.x[2] = 5; b.y[2] = 2;
		b.x[3] = 6; b.y[3] = 2;
		b.x[4] = 6; b.y[4] = 3;
	}
	if( b.type == 4 ){
		b.x[1] = 6; b.y[1] = 1;
		b.x[2] = 6; b.y[2] = 2;
		b.x[3] = 5; b.y[3] = 2;
		b.x[4] = 5; b.y[4] = 3;
	}
	if( b.type == 5 ){
		b.x[1] = 5; b.y[1] = 1;
		b.x[2] = 5; b.y[2] = 2;
		b.x[3] = 5; b.y[3] = 3;
		b.x[4] = 6; b.y[4] = 3;
	}
	if( b.type == 6 ){
		b.x[1] = 6; b.y[1] = 1;
		b.x[2] = 6; b.y[2] = 2;
		b.x[3] = 6; b.y[3] = 3;
		b.x[4] = 5; b.y[4] = 3;
	}
	if( b.type == 7 ){
		b.x[1] = 5; b.y[1] = 1;
		b.x[2] = 5; b.y[2] = 2;
		b.x[3] = 5; b.y[3] = 3;
		b.x[4] = 5; b.y[4] = 4;
	}
};

function rotateBlockLeft( b, t ){
	var i;
	var tb = new Object();
	tb.x = new Array();
	tb.y = new Array();
	for( i = 1; i <= 4; i++ ){
		tb.x[i] = b.x[i];
		tb.y[i] = b.y[i];
	}
	
	if( b.rotate == 0 ){
		if( b.type == 2 ){
			tb.x[1] = tb.x[2] - 1; tb.y[1] = tb.y[2];
			tb.x[3] = tb.x[2] + 1; tb.y[3] = tb.y[2];
			tb.x[4] = tb.x[2]; tb.y[4] = tb.y[2] - 1;
		}
		if( b.type == 3 ){
			tb.x[1] = tb.x[2] - 1; tb.y[1] = tb.y[2];
			tb.x[3] = tb.x[2]; tb.y[3] = tb.y[2] - 1;
			tb.x[4] = tb.x[2] + 1; tb.y[4] = tb.y[2] - 1;
		}
		if( b.type == 4 ){
			tb.x[1] = tb.x[2] + 1; tb.y[1] = tb.y[2];
			tb.x[3] = tb.x[2]; tb.y[3] = tb.y[2] - 1;
			tb.x[4] = tb.x[2] - 1; tb.y[4] = tb.y[2] - 1;
		}
		if( b.type == 5 ){
			tb.x[1] = tb.x[3] - 2; tb.y[1] = tb.y[3];
			tb.x[2] = tb.x[3] - 1; tb.y[2] = tb.y[3];
			tb.x[4] = tb.x[3]; tb.y[4] = tb.y[3] - 1;
		}
		if( b.type == 6 ){
			tb.x[1] = tb.x[3] - 2; tb.y[1] = tb.y[3];
			tb.x[2] = tb.x[3] - 1; tb.y[2] = tb.y[3];
			tb.x[4] = tb.x[3]; tb.y[4] = tb.y[3] + 1;
		}
		if( b.type == 7 ){
			tb.x[1] = tb.x[2] - 1; tb.y[1] = tb.y[2];
			tb.x[3] = tb.x[2] + 1; tb.y[3] = tb.y[2];
			tb.x[4] = tb.x[2] + 2; tb.y[4] = tb.y[2];
		}
	}
	else if( b.rotate == 1 ){
		if( b.type == 2 ){
			tb.x[1] = tb.x[2]; tb.y[1] = tb.y[2] + 1;
			tb.x[3] = tb.x[2]; tb.y[3] = tb.y[2] - 1;
			tb.x[4] = tb.x[2] + 1; tb.y[4] = tb.y[2];
		}
		if( b.type == 3 ){
			tb.x[1] = tb.x[2]; tb.y[1] = tb.y[2] - 1;
			tb.x[3] = tb.x[2] + 1; tb.y[3] = tb.y[2];
			tb.x[4] = tb.x[2] + 1; tb.y[4] = tb.y[2] + 1;
		}
		if( b.type == 4 ){
			tb.x[1] = tb.x[2]; tb.y[1] = tb.y[2] - 1;
			tb.x[3] = tb.x[2] - 1; tb.y[3] = tb.y[2];
			tb.x[4] = tb.x[2] - 1; tb.y[4] = tb.y[2] + 1;
		}
		if( b.type == 5 ){
			tb.x[1] = tb.x[3]; tb.y[1] = tb.y[3] - 2;
			tb.x[2] = tb.x[3]; tb.y[2] = tb.y[3] - 1;
			tb.x[4] = tb.x[3] + 1; tb.y[4] = tb.y[3];
		}
		if( b.type == 6 ){
			tb.x[1] = tb.x[3]; tb.y[1] = tb.y[3] - 2;
			tb.x[2] = tb.x[3]; tb.y[2] = tb.y[3] - 1;
			tb.x[4] = tb.x[3] - 1; tb.y[4] = tb.y[3];
		}
		if( b.type == 7 ){
			tb.x[1] = tb.x[2]; tb.y[1] = tb.y[2] - 1;
			tb.x[3] = tb.x[2]; tb.y[3] = tb.y[2] + 1;
			tb.x[4] = tb.x[2]; tb.y[4] = tb.y[2] + 2;
		}
	}
	else if( b.rotate == 2 ){
		if( b.type == 2 ){
			tb.x[1] = tb.x[2] + 1; tb.y[1] = tb.y[2];
			tb.x[3] = tb.x[2] - 1; tb.y[3] = tb.y[2];
			tb.x[4] = tb.x[2]; tb.y[4] = tb.y[2] + 1;
		}
		if( b.type == 5 ){
			tb.x[1] = tb.x[3] + 2; tb.y[1] = tb.y[3];
			tb.x[2] = tb.x[3] + 1; tb.y[2] = tb.y[3];
			tb.x[4] = tb.x[3]; tb.y[4] = tb.y[3] + 1;
		}
		if( b.type == 6 ){
			tb.x[1] = tb.x[3] + 2; tb.y[1] = tb.y[3];
			tb.x[2] = tb.x[3] + 1; tb.y[2] = tb.y[3];
			tb.x[4] = tb.x[3]; tb.y[4] = tb.y[3] - 1;
		}
	}
	else if( b.rotate == 3 ){
		if( b.type == 2 ){
			tb.x[1] = tb.x[2]; tb.y[1] = tb.y[2] + 1;
			tb.x[3] = tb.x[2]; tb.y[3] = tb.y[2] - 1;
			tb.x[4] = tb.x[2] - 1; tb.y[4] = tb.y[2];
		}
		if( b.type == 5 ){
			tb.x[1] = tb.x[3]; tb.y[1] = tb.y[3] + 2;
			tb.x[2] = tb.x[3]; tb.y[2] = tb.y[3] + 1;
			tb.x[4] = tb.x[3] - 1; tb.y[4] = tb.y[3];
		}
		if( b.type == 6 ){
			tb.x[1] = tb.x[3]; tb.y[1] = tb.y[3] + 2;
			tb.x[2] = tb.x[3]; tb.y[2] = tb.y[3] + 1;
			tb.x[4] = tb.x[3] + 1; tb.y[4] = tb.y[3];
		}
	}
	
	/* 회전이 가능한가? 체크 */
	var c = new Object();
	c.x = new Array(0, 0, 0,-1, 1,-2, 2);
	c.y = new Array(0,-1, 1, 0, 0, 0, 0);
	
	for( k = 0; k <= 6; k++ ){
		for( i = 1; i <= 4; i++ ){
			if( tb.y[i] + c.y[k] < 1 || tb.y[i] + c.y[k] > 15 || tb.x[i] + c.x[k] < 1 || tb.x[i] + c.x[k] > 10 ){
				i = 0;
				break;
			}
			if( t[ tb.y[i] + c.y[k] ][ tb.x[i] + c.x[k] ] != 0 ){
				i = 0;
				break;
			}
		}
		if( i != 0 ){
			for( i = 1; i <= 4; i++ ){
				b.x[i] = tb.x[i] + c.x[k];
				b.y[i] = tb.y[i] + c.y[k];
			}
			b.rotate--;
			if( b.type == 2 || b.type == 5 || b.type == 6 ){
				if( b.rotate < 0 ) b.rotate = 3;
			}
			else if( b.type == 3 || b.type == 4 || b.type == 7 ){
				if( b.rotate < 0 ) b.rotate = 1;
			}
			break;
		}
	}
};
function rotateBlockRight( b, t ){
	var k, i;
	var tb = new Object();
	tb.x = new Array();
	tb.y = new Array();
	for( i = 1; i <= 4; i++ ){
		tb.x[i] = b.x[i];
		tb.y[i] = b.y[i];
	}
	
	if( b.rotate == 0 ){
		if( b.type == 2 ){
			tb.x[1] = tb.x[2] - 1; tb.y[1] = tb.y[2];
		}
		if( b.type == 3 ){
			tb.x[1] = tb.x[2] - 1; tb.y[1] = tb.y[2];
			tb.x[3] = tb.x[2]; tb.y[3] = tb.y[2] - 1;
			tb.x[4] = tb.x[2] + 1; tb.y[4] = tb.y[2] - 1;
		}
		if( b.type == 4 ){
			tb.x[1] = tb.x[2] + 1; tb.y[1] = tb.y[2];
			tb.x[3] = tb.x[2]; tb.y[3] = tb.y[2] - 1;
			tb.x[4] = tb.x[2] - 1; tb.y[4] = tb.y[2] - 1;
		}
		if( b.type == 5 ){
			tb.x[1] = tb.x[3] + 2; tb.y[1] = tb.y[3];
			tb.x[2] = tb.x[3] + 1; tb.y[2] = tb.y[3];
			tb.x[4] = tb.x[3]; tb.y[4] = tb.y[3] + 1;
		}
		if( b.type == 6 ){
			tb.x[1] = tb.x[3] + 2; tb.y[1] = tb.y[3];
			tb.x[2] = tb.x[3] + 1; tb.y[2] = tb.y[3];
			tb.x[4] = tb.x[3]; tb.y[4] = tb.y[3] - 1;
		}
		if( b.type == 7 ){
			tb.x[1] = tb.x[2] - 1; tb.y[1] = tb.y[2];
			tb.x[3] = tb.x[2] + 1; tb.y[3] = tb.y[2];
			tb.x[4] = tb.x[2] + 2; tb.y[4] = tb.y[2];
		}
	}
	else if( b.rotate == 1 ){
		if( b.type == 2 ){
			tb.x[4] = tb.x[2]; tb.y[4] = tb.y[2] - 1;
		}
		if( b.type == 3 ){
			tb.x[1] = tb.x[2]; tb.y[1] = tb.y[2] - 1;
			tb.x[3] = tb.x[2] + 1; tb.y[3] = tb.y[2];
			tb.x[4] = tb.x[2] + 1; tb.y[4] = tb.y[2] + 1;
		}
		if( b.type == 4 ){
			tb.x[1] = tb.x[2]; tb.y[1] = tb.y[2] - 1;
			tb.x[3] = tb.x[2] - 1; tb.y[3] = tb.y[2];
			tb.x[4] = tb.x[2] - 1; tb.y[4] = tb.y[2] + 1;
		}
		if( b.type == 5 ){
			tb.x[1] = tb.x[3]; tb.y[1] = tb.y[3] + 2;
			tb.x[2] = tb.x[3]; tb.y[2] = tb.y[3] + 1;
			tb.x[4] = tb.x[3] - 1; tb.y[4] = tb.y[3];
		}
		if( b.type == 6 ){
			tb.x[1] = tb.x[3]; tb.y[1] = tb.y[3] + 2;
			tb.x[2] = tb.x[3]; tb.y[2] = tb.y[3] + 1;
			tb.x[4] = tb.x[3] + 1; tb.y[4] = tb.y[3];
		}
		if( b.type == 7 ){
			tb.x[1] = tb.x[2]; tb.y[1] = tb.y[2] - 1;
			tb.x[3] = tb.x[2]; tb.y[3] = tb.y[2] + 1;
			tb.x[4] = tb.x[2]; tb.y[4] = tb.y[2] + 2;
		}
	}
	else if( b.rotate == 2 ){
		if( b.type == 2 ){
			tb.x[3] = tb.x[2] + 1; tb.y[3] = tb.y[2];
		}
		if( b.type == 5 ){
			tb.x[1] = tb.x[3] - 2; tb.y[1] = tb.y[3];
			tb.x[2] = tb.x[3] - 1; tb.y[2] = tb.y[3];
			tb.x[4] = tb.x[3]; tb.y[4] = tb.y[3] - 1;
		}
		if( b.type == 6 ){
			tb.x[1] = tb.x[3] - 2; tb.y[1] = tb.y[3];
			tb.x[2] = tb.x[3] - 1; tb.y[2] = tb.y[3];
			tb.x[4] = tb.x[3]; tb.y[4] = tb.y[3] + 1;
		}
	}
	else if( b.rotate == 3 ){
		if( b.type == 2 ){
			tb.x[1] = tb.x[2]; tb.y[1] = tb.y[2] - 1;
			tb.x[3] = tb.x[2]; tb.y[3] = tb.y[2] + 1;
			tb.x[4] = tb.x[2] + 1; tb.y[4] = tb.y[2];
		}
		if( b.type == 5 ){
			tb.x[1] = tb.x[3]; tb.y[1] = tb.y[3] - 2;
			tb.x[2] = tb.x[3]; tb.y[2] = tb.y[3] - 1;
			tb.x[4] = tb.x[3] + 1; tb.y[4] = tb.y[3];
		}
		if( b.type == 6 ){
			tb.x[1] = tb.x[3]; tb.y[1] = tb.y[3] - 2;
			tb.x[2] = tb.x[3]; tb.y[2] = tb.y[3] - 1;
			tb.x[4] = tb.x[3] - 1; tb.y[4] = tb.y[3];
		}
	}
	
	/* 회전이 가능한가? 체크 */
	var c = new Object();
	c.x = new Array(0, 0, 0,-1, 1,-2, 2);
	c.y = new Array(0,-1, 1, 0, 0, 0, 0);
	
	for( k = 0; k <= 6; k++ ){
		for( i = 1; i <= 4; i++ ){
			if( tb.y[i] + c.y[k] < 1 || tb.y[i] + c.y[k] > 15 || tb.x[i] + c.x[k] < 1 || tb.x[i] + c.x[k] > 10 ){
				i = 0;
				break;
			}
			if( t[ tb.y[i] + c.y[k] ][ tb.x[i] + c.x[k] ] != 0 ){
				i = 0;
				break;
			}
		}
		if( i != 0 ){
			for( i = 1; i <= 4; i++ ){
				b.x[i] = tb.x[i] + c.x[k];
				b.y[i] = tb.y[i] + c.y[k];
			}
			if( b.type == 2 || b.type == 5 || b.type == 6 ) b.rotate = (b.rotate + 1) % 4;
			else if( b.type == 3 || b.type == 4 || b.type == 7 ) b.rotate = (b.rotate + 1) % 2;
			break;
		}
	}
};

function moveBlock( b, t, dir, f, nextBlock ){
	var i;
	/* 하 */
	if( dir == 2 ){
		for( i = 1; i <= 4; i++ ){
			if( t[ b.y[i] + 1 ][ b.x[i] ] != 0 ){
				i = 0;
				break;
			}
		}
		
		if( i == 0 ){
			for( i = 1; i <= 4; i++ ) t[ b.y[i] ][ b.x[i] ] = 1;
			makeBlock( b, nextBlock[ f.blockNumber%1000 ] );
			f.blockNumber++;
			for( i = 1; i <= 4; i++ ){
				if( t[ b.y[i] ][ b.x[i] ] != 0 ){
					i = 0;
					break;
				}
			}
			if( i == 0 ){
				f.die = true;
			}
		}
		else{
			for( i = 1; i <= 4; i++ ) b.y[i]++;
		}
	}
	/* 좌 */
	if( dir == 3 ){
		for( i = 1; i <= 4; i++ ){
			if( t[ b.y[i] ][ b.x[i] - 1 ] != 0 ){
				i = 0;
				break;
			}
		}
		
		if( i != 0 ){
			for( i = 1; i <= 4; i++ ) b.x[i]--;
		}
	}
	/* 우 */
	if( dir == 4 ){
		for( i = 1; i <= 4; i++ ){
			if( t[ b.y[i] ][ b.x[i] + 1 ] != 0 ){
				i = 0;
				break;
			}
		}
		
		if( i != 0 ){
			for( i = 1; i <= 4; i++ ) b.x[i]++;
		}
	}
};

function gravBlocks( block, table, form, nextBlock ){
	var k;
	for( k = 1; k <= block[0]; k++ ){
		if( form[k].die ) continue;
		
		block[k].delayG++;
		if( block[k].delayG >= 25 ){
			moveBlock( block[k], table[k], 2, form[k], nextBlock );
			block[k].delayG = 0;
		}
	}
};

function moveBlocks( key, form, block, table, nextBlock ){
	var k;
	
	/*
	block[1].delayX--;
	block[1].delayY--;
	
	if( key.down ){
		if( block[1].delayY <= 0 ){
			moveBlock( block[1], table[1], 2, form[1], nextBlock );
			block[1].delayY = 2;
			block[1].delayG = 0;
		}
	}
	if( key.left ){
		if( block[1].delayX <= 0 ){
			moveBlock( block[1], table[1], 3 );
			block[1].delayX = 2;
		}
	}
	if( key.right ){
		if( block[1].delayX <= 0 ){
			moveBlock( block[1], table[1], 4 );
			block[1].delayX = 2;
		}
	}
	*/
	
	/* 컴퓨터 */
	for( k = 1; k <= table[0]; k++ ){
		if( form[k].die ) continue;
		setDest( block[k], table[k], form[k] );
		
		if( block[k].rotate < form[k].destR ){
			rotateBlockRight( block[k], table[k] );
		}
		
		if( block[k].x[2] < form[k].destX ){
			moveBlock( block[k], table[k], 4 );
		}
		else if( block[k].x[2] > form[k].destX ){
			moveBlock( block[k], table[k], 3 );
		}
		else{
			moveBlock( block[k], table[k], 2, form[k], nextBlock );
		}
	}
};

function printBlocks( block, form, img, context ){
	var k, i, j;
	var sx = -10, sy = 50;
	
	if( block[0] == 2 ){
		/* 2인 */
		for( k = 1; k <= block[0]; k++ ){
			if( form[k].die ) continue;
			
			for( i = 1; i <= 4; i++ ){
				context.fillStyle = "rgb(255,255,255)";
				context.fillRect( sx + block[k].x[i]*22, sy + block[k].y[i]*22, 20, 20 );
			}
			sx += 320;
		}
	}
	
	else{
		/* 12인 */
		sx = -10, sy = 0;
		for( k = 1; k <= block[0]; k++ ){
			if( form[k].die ){
				sx += 160;
				if( sx > 480 ){
					sx = -10;
					sy += 230;
				}
				continue;
			}
			
			for( i = 1; i <= 4; i++ ){
				context.fillStyle = "rgb(255,255,255)";
				context.fillRect( sx + block[k].x[i]*15, sy + block[k].y[i]*15, 13, 13 );
			}
			sx += 160;
			if( sx > 480 ){
				sx = -10;
				sy += 230;
			}
		}
	}
};