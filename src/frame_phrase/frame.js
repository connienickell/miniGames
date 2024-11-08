// score array
// current score
// for number of rounds
    // take input from guessbox
        // parse input (is alpha)
        // if parse matches answer by > x%
            // score ++
// push score to score array
// calculate score (sum/arr.length)
// return score

const guessButton = document.getElementById("guessButton");
const hintButton = document.getElementById("hintButton");

const guessButtonTwo = document.getElementById("guessButtonTwo");
const hintButtonTwo = document.getElementById("hintButtonTwo");

const guessButtonThree = document.getElementById("guessButtonThree");
const hintButtonThree = document.getElementById("hintButtonThree");

const guessButtonFour = document.getElementById("guessButtonFour");
const hintButtonFour = document.getElementById("hintButtonFour");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function evaluateGuess(evt){
    evt.preventDefault();
    const guess = document.querySelector("#guess").value.toLowerCase();
    console.log("guess: " + guess);
    const splitGuess = guess.split("");
    console.log(splitGuess);
    const answerOne = "curiositykilledthecat";
    // parse the input
    let parsed = "";    
    for (i = 0; i < splitGuess.length; i++){
        if(alphabet.includes(splitGuess[i])){
            parsed += splitGuess[i];
        }
    }
    // calculate correct chars
    let totalChar = answerOne.length;
    let correctCount = 0;
    for (let i = 0; i < totalChar; i++){
        if (answerOne[i] === parsed[i]){
            correctCount++;
        }
    }
    let percent = correctCount/totalChar;
    if (percent > 0.40){
        alert("bingo");
    } else {
        alert("not quite");
    }
    console.log(percent);
}

function evaluateGuessTwo(evt){
    evt.preventDefault();
    const guessTwo = document.querySelector("#guessTwo").value.toLowerCase();
    console.log("guess: " + guessTwo);
    const splitGuessTwo = guessTwo.split("");
    console.log(splitGuessTwo);
    const answerTwo = "earlybirdgetstheworm";
    console.log("______");
    // parse the input
    let parsedTwo = "";    
    for (i = 0; i < splitGuessTwo.length; i++){
        if(alphabet.includes(splitGuessTwo[i])){
            parsedTwo += splitGuessTwo[i];
        }
    }
    // calculate correct chars
    let totalChar = answerTwo.length;
    let correctCount = 0;
    for (let i = 0; i < totalChar; i++){
        if (answerTwo[i] === parsedTwo[i]){
            correctCount++;
        }
    }
    let percent = correctCount/totalChar;
    if (percent > 0.40){
        alert("bingo");
    } else {
        alert("not quite");
    }
    console.log(percent);
}

function evaluateGuessThree(evt){
    evt.preventDefault();
    const guessThree = document.querySelector("#guessThree").value.toLowerCase();
    console.log("guess: " + guessThree);
    const splitGuessThree = guessThree.split("");
    console.log(splitGuessThree);
    const answerThree = "burningthemidnightoil";
    // parse the input
    let parsed = "";    
    for (i = 0; i < splitGuessThree.length; i++){
        if(alphabet.includes(splitGuessThree[i])){
            parsed += splitGuessThree[i];
        }
    }
    // calculate correct chars
    let totalChar = answerThree.length;
    let correctCount = 0;
    for (let i = 0; i < totalChar; i++){
        if (answerThree[i] === parsed[i]){
            correctCount++;
        }
    }
    let percent = correctCount/totalChar;
    if (percent > 0.40){
        alert("bingo");
    } else {
        alert("not quite");
    }
    console.log(percent);
}

function evaluateGuessFour(evt){
    evt.preventDefault();
    const guessFour = document.querySelector("#guessFour").value.toLowerCase();
    console.log("guess: " + guessFour);
    const splitGuessFour = guessFour.split("");
    console.log(splitGuessFour);
    const answerFour = "apieceofcake";
    // parse the input
    let parsed = "";    
    for (i = 0; i < splitGuessFour.length; i++){
        if(alphabet.includes(splitGuessFour[i])){
            parsed += splitGuessFour[i];
        }
    }
    // calculate correct chars
    let totalChar = answerFour.length;
    let correctCount = 0;
    for (let i = 0; i < totalChar; i++){
        if (answerFour[i] === parsed[i]){
            correctCount++;
        }
    }
    let percent = correctCount/totalChar;
    if (percent > 0.40){
        alert("bingo");
    } else {
        alert("not quite");
    }
    console.log(percent);
}



// give hints
function revealHint(evt){
    console.log("successful click");
    evt.preventDefault();
    alert("curiosity did wha??");
}

function revealHintTwo(evt){
    evt.preventDefault();
    alert("someone's getting a worm");
}

function revealHintThree(evt){
    console.log("successful click");
    evt.preventDefault();
    alert("get it done late at night");
}

function revealHintFour(evt){
    console.log("successful click");
    evt.preventDefault();
    alert("so easy");
}


// only trigger clicked event listener
if (guessButton){
guessButton.addEventListener("submit", evaluateGuess);}
if (hintButton){
hintButton.addEventListener("click", revealHint);}

if (guessButtonTwo){
guessButtonTwo.addEventListener("submit", evaluateGuessTwo);}
if (hintButtonTwo){
hintButtonTwo.addEventListener("click", revealHintTwo);}

if (guessButtonThree){
guessButtonThree.addEventListener("submit", evaluateGuessThree);}
if (hintButtonThree){
hintButtonThree.addEventListener("click", revealHintThree);}

if (guessButtonFour){
guessButtonFour.addEventListener("submit", evaluateGuessFour);}
if (hintButtonFour){
hintButtonFour.addEventListener("click", revealHintFour);}