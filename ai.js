function countTouch( b, t, f ){
	var i, j, count = 0;
	for( i = 1; i <= 4; i++ ){
		if( t[ b.y[i] - 1 ][ b.x[i] ] == 1 ){
			count += f.gene[1];
		}
		if( t[ b.y[i] + 1 ][ b.x[i] ] == 1 ){
			count += f.gene[2];
		}
		if( t[ b.y[i] ][ b.x[i] - 1 ] == 1 ){
			count += f.gene[3];
		}
		if( t[ b.y[i] ][ b.x[i] + 1 ] == 1 ){
			count += f.gene[4];
		}
		if( t[ b.y[i] - 1 ][ b.x[i] ] == 2 ){
			count += f.gene[5];
		}
		if( t[ b.y[i] + 1 ][ b.x[i] ] == 2 ){
			count += f.gene[6];
		}
		if( t[ b.y[i] ][ b.x[i] - 1 ] == 2 ){
			count += f.gene[7];
		}
		if( t[ b.y[i] ][ b.x[i] + 1 ] == 2 ){
			count += f.gene[8];
		}
	}
	
	for( i = 1; i <= 4; i++ ){
		t[ b.y[i] ][ b.x[i] ] = 3;
	}
	
	/* 지붕 만들면 감점 */
	for( i = 1; i <= 4; i++ ){
		for( k = 1; k <= k+1; k++ ){
			if( t[ b.y[i] + k ][ b.x[i] ] == 0 ) count -= f.gene[9];
			else break;
		}
	}
	/* 줄 지우면 가점 */
	for( i = 1; i <= 15; i++ ){
		for( j = 1; j <= 10; j++ ){
			if( t[i][j] == 0 ){
				j = 0;
				break;
			}
		}
		if( j != 0 ){
			count += f.gene[10];
		}
	}
	
	for( i = 1; i <= 4; i++ ){
		t[ b.y[i] ][ b.x[i] ] = 0;
	}
	
	/* 너무 높게 쌓으면 감점 */
	if( b.y[2] < f.gene[11] ){
		count -= f.gene[12];
	}
	
	return count;
};

function setDest( b, t, f ){
	var i, j, k;
	var count = 0, max = -2147483647, destX = 0, destY = 0, destR = 0;
	
	var tb = new Object(), sb = new Object();
	
	tb.x = new Array();
	tb.y = new Array();
	for( i = 1; i <= 4; i++ ){
		tb.x[i] = b.x[i];
		tb.y[i] = b.y[i];
	}
	tb.type = b.type;
	
	for( k = 0; k <= 3; k++ ){
		/* 왼쪽으로 밀기 */
		while( true ){
			for( i = 1; i <= 4; i++ ){
				if( t[ tb.y[i] ][ tb.x[i] - 1 ] != 0 ){
					i = 0;
					break;
				}
			}
			
			if( i == 0 ) break;
			
			for( i = 1; i <= 4; i++ ) tb.x[i]--;
		}
		
		sb.x = new Array();
		sb.y = new Array();
		/* 초기값 저장 */
		for( i = 1; i <= 4; i++ ){
			sb.x[i] = tb.x[i];
			sb.y[i] = tb.y[i];
		}
		
		while( true ){
			/* 맨 밑으로 밀기 */
			while( true ){
				for( i = 1; i <= 4; i++ ){
					if( t[ tb.y[i] + 1 ][ tb.x[i] ] != 0 ){
						i = 0;
						break;
					}
				}
				
				if( i == 0 ) break;
				
				for( i = 1; i <= 4; i++ ) tb.y[i]++;
			}
			
			count = countTouch( tb, t, f );
			if( max < count ){
				max = count;
				destX = tb.x[2];
				destY = tb.y[2];
				destR = k;
			}
			else if( max == count ){
				if( destY < tb.y[2] ){
					destX = tb.x[2];
					destY = tb.y[2];
					destR = k;
				}
			}
			
			/* 초기값 불러오기 */
			for( i = 1; i <= 4; i++ ){
				tb.x[i] = sb.x[i];
				tb.y[i] = sb.y[i];
			}
			
			/* 오른쪽으로 한칸 밀기 */
			for( i = 1; i <= 4; i++ ){
				if( t[ tb.y[i] ][ tb.x[i] + 1 ] != 0 ){
					i = 0;
					break;
				}
			}
			
			/* 못 밀면 끝 */
			if( i == 0 ) break;
			
			for( i = 1; i <= 4; i++ ){
				tb.x[i]++;
				sb.x[i]++;
			}
		}
		
		for( i = 1; i <= 4; i++ ){
			tb.x[i] = b.x[i];
			tb.y[i] = b.y[i];
		}
		tb.rotate = 0;
		for( i = 0; i <= k; i++ ){
			rotateBlockRight( tb, t );
		}
	}
	
	f.destX = destX;
	f.destR = destR;
};

function newGene( table, block, form, nextBlock, skip ){
	var k, i, j;
	var geneA = new Array(), geneB = new Array();
	
	if( !skip ){
		for( k = 1; k <= table[0]; k++ ){
			if( !form[k].die ) return;
		}
	}
	
	var max1 = 0, max2 = 0, index1 = 0, index2 = 0;
		
	for( k = 1; k <= form[0].n; k++ ){
		if( max1 <= form[k].blockNumber ){
			max1 = form[k].blockNumber;
			index1 = k;
		}
	}
	for( k = 1; k <= form[0].n; k++ ){
		if( max2 <= form[k].blockNumber && index1 != k ){
			max2 = form[k].blockNumber;
			index2 = k;
		}
	}
	
	for( i = 1; i <= 12; i++ ){
		geneA[i] = form[index1].gene[i];
		geneB[i] = form[index2].gene[i];
	}
	
	/* 부모 */
	for( i = 1; i <= 12; i++ ){
		form[1].gene[i] = geneA[i];
		form[2].gene[i] = geneB[i];		
	}
	/* 자식 */
	for( k = 3; k < form[0].n; k++ ){
		for( i = 1; i <= 11; i++ ){
			form[k].gene[i] = (geneA[i] + geneB[i]) / 2 * ( 0.8 + Math.random()*0.4 );
		}
	}
	/* 돌연변이 */
	for( i = 1; i <= 12; i++ ){
		form[form[0].n].gene[i] = (geneA[i] + geneB[i]) / 2 * ( Math.random()*2 );
	}
	
	/* 초기화 */
	for( k = 1; k <= form[0].n; k++ ){
		form[k].die = false;
		
		for( i = 1; i <= 15; i++ ){
			for( j = 1; j <= 10; j++ ){
				table[k][i][j] = 0;
			}
		}
		
		form[k].blockNumber = 0;
		makeBlock( block[k], nextBlock[ form[k].blockNumber ] );
		form[k].blockNumber++;
	}
	
	form[0].generation++;
};