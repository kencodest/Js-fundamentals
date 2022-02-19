//Do not Repeat Yourself

const maxTrials = 5
let trialsLeft = 5
let guessNum = Math.floor(Math.random() * (maxTrials + 1)) //the guess number

//Get the ids od the HTML elements that we want to modify
let guessEl = document.getElementById("guess-el")
let trialsEl = document.getElementById("trials-el")
let resultEl = document.getElementById("result-el")

guessEl.textContent = `Guess a number between 1 and ${maxTrials}.`
trialsEl.textContent = `You have ${maxTrials} trials.`

let compEL = document.getElementById("comp-el")
compEL.textContent = `The computer guessed ${guessNum}.`

//The function should ask the user to guess a number btwn 1 and 10.
//It should give the user a number of trials and exit if the user fails to guess right by the last try
function guesses(){

    for(i=1;i<=maxTrials;i++){
        // var guessedValue = prompt("") // for the browser
        // const prompt = require("prompt-sync")({ sigint: true });

        // the syntax for parseInt() is:parseInt(string, radix) 
        //where radix is the base of the integer that you are converting into which is number 
        //between 2 and 36
        const guessedValue = parseInt(prompt(`Enter your guess. (${trialsLeft}) trials left`), 10); 

        // const guessedValue = prompt();   

        if (guessedValue === guessNum){
            resultEl.textContent = "Congratulations! You got!!"
            break
        }
        else if (isNaN(guessedValue) === true){
            trialsLeft -= 1
            resultEl.textContent = `That didn't seem to be an integer, try again. (${trialsLeft}) more tries`//if a letter is passed, parseInt retuns type NaN(Not a Number)
        }
        else if (i === maxTrials){
            resultEl.textContent = "We got to the last try. Run my code again, let's have some fun!"
            break
        }
        else{
            trialsLeft -= 1
            resultEl.textContent = `Sorry, try again. Trials left (${trialsLeft})`
        }
                
    }
}


// the code works 100% fine
// Recommeded additions: Implement a try catch() block which allows the user to to try again without
// a limit to the number of tries.