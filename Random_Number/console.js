//Do not Repeat Yourself

const maxTrials = 5
let trialsLeft = 5
let guessNum = Math.floor(Math.random() * (maxTrials + 1)) //the guess number


// In JS, you can format the console.log text using ` ` and using ${variable} as shown below
console.log(`The computer guessed ${guessNum}`) //to check what the random number is
console.log(`Welcome to the guessing game. Guess a number between 1 and ${maxTrials} \nYou have ${maxTrials} trial(s)`)


//The function should ask the user to guess a number btwn 1 and 10.
//It should give the user a number of trials and exit if the user fails to guess right by the last try
function guesses(){
        
        for(i=1;i<=maxTrials;i++){
            // var guessedValue = prompt("") // for the browser
            const prompt = require("prompt-sync")({ sigint: true });

            // the syntax for parseInt() is:parseInt(string, radix) 
            //where radix is the base of the integer that you are converting into which is number 
            //between 2 and 36
            const guessedValue = parseInt(prompt(), 10); 

            // const guessedValue = prompt();   

            if (guessedValue === guessNum){
                console.log("Congratulations! You got!!")
                break
            }
            else if (isNaN(guessedValue) === true){
                trialsLeft -= 1
                console.log(`That didn't seem to be an integer, try again. (${trialsLeft}) more tries`)//if a letter is passed, parseInt retuns type NaN(Not a Number)
                // guesses()
            }
            else if (i === maxTrials){
                console.log("We got to the last try. Run my code again, let's have some fun!")
                break
            }
            else{
                trialsLeft -= 1
                console.log(`Sorry, try again. Trials left (${trialsLeft})`)
            }
                    
        }
}


guesses()
// the code works 100% fine
// Recommeded additions: Implement a try catch() block which allows the user to to try again without
// a limit to the number of tries.