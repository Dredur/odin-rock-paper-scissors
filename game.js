
playGame();

function playGame(){

    let roundCount = 0;
    let humanScore = 0;
    let computerScore = 0;
    let winnerText = "";

    for (let i = 1; i <= 5; i++){

        roundCount++;

        console.log(`--- Runde ${roundCount} ---`)

        winnerText = playRound();

        if(winnerText == "human") humanScore++;
        else if (winnerText == "computer") computerScore++;
        else ;

        console.log(`---
            Punktestand Runde ${roundCount}
            human:    ${humanScore}
            computer: ${computerScore}
            ---`);

    }

    function playRound() {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let scoreText = "No match was played."
        let winner = "Not played";
        let looser = "Not played";

        // humans wins
        if((humanChoice == "rock" && computerChoice == "scissors") ||
           (humanChoice == "scissors" && computerChoice == "paper") ||
           (humanChoice == "paper" && computerChoice == "rock")){
            winner = "human";
            looser = "computer";
            scoreText = `${winner} hat mit ${humanChoice} gegen ${looser} mit ${computerChoice} gewonnen.`;
        }
        // computer wins
        else if((humanChoice == "rock" && computerChoice == "paper") ||
           (humanChoice == "scissors" && computerChoice == "rock") ||
           (humanChoice == "paper" && computerChoice == "scissors")){
            winner = "computer";
            looser = "human";
            scoreText = `${winner} hat mit ${computerChoice} gegen ${looser} mit ${humanChoice} gewonnen.`;
        }
        // tie
        else if(humanChoice == computerChoice){
            winner="tie"
            scoreText = `Unentschieden - Beide haben ${humanChoice} gewählt.`;
        }
        else {
            console.log("Keine gültige Eingabe.")
        }

        console.log(scoreText)
        return winner;
    }
}

function getComputerChoice() {
    
    let choice;
    let randomNumberTill3 = Math.random() * (3);

    if (randomNumberTill3 <= 1) choice = "rock";
    else if (randomNumberTill3 <= 2) choice = "paper";
    else if (randomNumberTill3 <= 3) choice = "scissors";
    else choice = "not possible";

    return choice;
}

function getHumanChoice() {
    
    let choice = prompt(`Gib "rock", "paper" oder "scissors" ein:`);

    return choice.toLowerCase();
}