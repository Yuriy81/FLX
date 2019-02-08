// Your code goes here
let answer = confirm('Do you want to play a game?');

let min = 0;
let max = 5;

let userGuess;
let totalPrize = 0;
let prize = 10;   
let attempts = 3;

while (answer) { 
    let random = Math.floor(Math.random() * (max + 1));
    let currentPrize = prize;

    while (attempts) { 
        userGuess = +prompt(`
            Enter a number from ${min} to ${max}
            Attempts left: ${attempts}
            Total prize: ${totalPrize}$
            Possible prize on current attempt: ${currentPrize}$
            `, 0);
        if (userGuess === random) { 
            totalPrize += currentPrize;
            max *= 2;      
            prize *= 3;
            attempts = 3;
            
            answer = confirm(`Congratulation! Your prize is ${totalPrize}$ Do you want to continue?`);
            break;
        } else {  
            attempts--;
            currentPrize = Math.floor(currentPrize / 2);
        }
    }
    
    if (!answer || !attempts) {
        alert(`Thank you for a game. Your prize is ${totalPrize}$`);
        answer = confirm('Do you want to play again?');
        
        prize = 10; 
        totalPrize = 0;
        attempts = 3;
        max = 5;
    }
} 

alert('You did not become a millionaire but can');