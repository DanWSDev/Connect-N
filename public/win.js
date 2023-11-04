
let Max_x = 7;
let Max_y = 7;									// keep scalable
let winRow = 4;

let upDiagonal = - (Max_x -1);
let downDiagonal =  Max_x +1;				//vector offsets us to effectively search 
let Horizontal = 1;							//the board at different angles fot a winning run
let Vertical = Max_x;

let grid = new Array(Max_x * Max_y);



function isWin(colour,gridPos)
{	
   checkRun(Horizontal,colour,place);
   checkRun(downDiagonal,colour,place);		//Check for a winning run
   checkRun(upDiagonal,colour,place);			//from all angles rdiating from last drop
  // if (gridPos <= (Max_x * winRow) {
   	checkRun(Vertical,colour,place);
   //	}
}
    
function checkRun(vector,colour,counterPos)
{
let result = false;
let run = 0;
let moveOn = true;

while (colour == grid[counterPos] && moveOn == true) {  				//Test for run in "Forward" direction from last move position  
  run++;
  next = counterPos+=vector;  
  if (counterPos % Max_x != 1) 
     { 			
        counterPos = next;    
     }
     else 
     {
     	moveOn = false;
     }
  }
  
  if (colour != grid[counterPos]) {
  counterPos -= vector;
}
  
  if (run < winRow && vector != "Vertical") {
  	run = 0;	
  	moveOn = true;									
  			
  														//Reset run length to zero if run length is not a winner
  									//Move back to last place of test colour
  
  while (colour == grid[counterPos] && moveOn == true) {  			//Test for run in "reverse" direction from last test colour tile in this plane
	run++;  
	next = counterPos -= vector;
 
  if (counterPos % Max_x != 0)
     { 						  
        counterPos=next;
       
     }
     else {
     	moveOn = false;
     }
  }
  }
  
  
if (run >= winRow) {
  		result = true;
  		alert("***WINNER***");						//current indication of win (to be developed))
  		}
  	return result;
}



