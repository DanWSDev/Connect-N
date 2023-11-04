
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
   checkRun(Vertical,colour,place);
}
    
function checkRun(vector,colour,counterPos)
{
let result = false;
let run = 0;

				//Test for run in "Forward" direction from last move position
do {
        run++	
        counterPos+=vector;     
  } while ((grid[counterPos] == colour) && (isEdge(counterPos-vector) == false));
  //alert(isEdge(counterPos-vector) + run) ;
  
  if (run < winRow && vector != "Vertical") {
  	run = 0;													//Reset run length to zero if run length is not a winner
  	counterPos -= vector;								//Move back to last place of test colour
  
  
  
 // while (colour == grid[counterPos]) {  			//Test for run in "reverse" direction from last test colour tile in this plane
 // if (grid[counterPos] == colour ) 
 //    { 						  
 //       counterPos-=vector;
 //       run++
 //    }
 // }
  do {
        run++	
        counterPos-=vector;     
  } while ((grid[counterPos] == colour) && (isEdge(counterPos-vector) == false));
  //alert(isEdge(counterPos-vector) + run) ;
  
  }

  
  
if (run >= winRow) {
  		result = true;
  		alert("***WIN***");						//current indication of win (to be developed))
  		}
  	return result;
}

function isEdge(gridpos)
{
let result = false;
if ((gridpos % Max_x == 0) || (gridpos % Max_x == 0)) {					//Test for end columns to prevent 'wraparound ' wins
result = true;
}
return result;
}




function isRightEdge(gridpos)
{
let result = false;
if (gridpos % Max_x == 0){					//Test for end columns to prevent 'wraparound ' wins
result = true;
}
return result;
}

function isLeftEdge(gridpos)
{
let result = false;
if (gridpos % Max_x == 1){					//Test for end columns to prevent 'wraparound ' wins
result = true;
}
return result;
}


