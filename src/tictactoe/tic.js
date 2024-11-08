
const squares = document.getElementById("squares");
const reset = document.getElementById("reset");
let count = 0;

if (squares){
    squares.addEventListener("click", cellClick);   
}


if (reset){
    reset.addEventListener("click", resetBoard)    
}

function resetBoard(){
    a1.innerHTML = '';
    a2.innerHTML = '';
    a3.innerHTML = '';
    b1.innerHTML = '';
    b2.innerHTML = '';
    b3.innerHTML = '';
    c1.innerHTML = '';
    c2.innerHTML = '';
    c3.innerHTML = '';
}

// if (xWins){
//     results.innerHTML = "player one wins!";
// } else if (oWins){
//     results.innerHTML = "player two wins!";
// } else {
//     results.innerHTML = "it's a tie!"
// }


/* HANDLE EVENTS */

// checkWin is passed "X" or "O" depending on turn

function cellClick(evt){
    if ((evt.target.tagName === 'TD') && (count % 2 == 0) && (evt.target.innerHTML === '')){
        evt.target.innerHTML = 'X';
        count++;
        checkWin('X');
    } else if (evt.target.tagName === 'TD' && (evt.target.innerHTML === '')){
        evt.target.innerHTML = 'O'; 
        count++;
        checkWin('O');
    }
    console.log(count);
} 



function checkWin(player){
    // horizontal win
    if ((checkCellsForWin(["a1", "b1", "c1"], player))
    || (checkCellsForWin(["a2", "b2", "c2"], player))
    || (checkCellsForWin(["a3", "b3", "c3"], player))
    // vertical win 
    || (checkCellsForWin(["a1", "a2", "a3"], player))
    || (checkCellsForWin(["b1", "b2", "b3"], player))
    || (checkCellsForWin(["a1", "a2", "a3"], player))
    // X diagonal win
    || (checkCellsForWin(["a1", "b2", "c3"], player))
    || (checkCellsForWin(["a3", "b2", "c1"], player))) {
        alert("yeehaw. " + player + "! Game Over");
        // handleWin();
        // resetBoard();
    }
}

function checkCellsForWin(cellArray, player){
    // iterate through each cell to check if it contains all three X or O, if so, return true 
    for (const cell of cellArray){
        if (!(document.getElementById(cell).innerHTML === player)){
            return false;
        }   
    }
    // if this array of cells is complete, put an X through... maybe another for loop that then accesses these excat cells
    return true;
}
// LOGIC
// winner:

// if all horizontal, vertical, or diagonal are x
//     print player 1 wins
// else if all horizontal, vertical, or diagonal are o
//     print player 2 wins
// else 
//     print tie    
