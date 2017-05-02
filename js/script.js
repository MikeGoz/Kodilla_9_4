// Kodilla task 9.4 - tree

var i, j, 
	treeHeight, 
	star,
    space,
    spaceIni; 

function drawTree(treeHeight) {

  // half-tree..................................
  	
  	console.log('Half-tree :');
	
	for (i = 1; i <= treeHeight; i++) {
		
		star = '';
    
    	for (j = 1; j <= i; j++) {
			 
			star += '*';
		}
	
    	console.log(star);
  	}
  
  // full-tree...................................
  	
  	console.log('Full-tree :');
            
  	spaceIni = treeHeight - 1; //initial space on top of the tree
     
    for (i = 1; i <= treeHeight; i++) {
		
		star = '';
              
        for (j = 1; j <= 2*i-1; j++) {
        
        	star +=	'*';
		}
	    
	    space = ' '.repeat(spaceIni--);  // !!! :)
       
    	console.log(space, star);
    }
}
