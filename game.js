const choiceBtns = document.querySelector("#choices");
const replayBtn = document.querySelector("#replay")
const log = document.querySelector("#log");
const humanScoreDisplay = document.querySelector("#humanScore")
const computerScoreDisplay = document.querySelector("#computerScore")

let roundsPlayed = 0;

choiceBtns.addEventListener("click", (event) => {
    if((parseInt(humanScoreDisplay.textContent) < 5) && (parseInt(computerScoreDisplay.textContent) < 5)) {
        console.log(parseInt(humanScoreDisplay.textContent));
        roundsPlayed++;
        playRound(event.target.id);
    }
    else printLog("You need to start a new game.");
});

replayBtn.addEventListener("click", () => {
    computerScoreDisplay.textContent = 0;
    computerScoreDisplay.setAttribute("style", "color: black; font-weight: normal;");
    humanScoreDisplay.textContent = 0;
    humanScoreDisplay.setAttribute("style", "color: black; font-weight: normal;");
    roundsPlayed = 0;
    log.textContent = "";


});

function updateScoreboard(winner){
    if(winner == "human") {
        humanScoreDisplay.textContent = parseInt(humanScoreDisplay.textContent) + 1;
    }
    else if (winner == "computer"){
        computerScoreDisplay.textContent = parseInt(computerScoreDisplay.textContent) + 1;
    }
    else ;    
}

function playRound(choice) {
    let humanChoice = choice.toString().toLowerCase();
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
        printLog("Keine gültige Eingabe.")
    }

    printLog(scoreText)
    printLog(`--- Runde ${roundsPlayed} ---`);
    
    updateScoreboard(winner);
    
    if(parseInt(computerScoreDisplay.textContent) == 5) computerScoreDisplay.setAttribute("style", "color: green; font-weight: bold;");
    else if(parseInt(humanScoreDisplay.textContent) == 5) humanScoreDisplay.setAttribute("style", "color: green; font-weight: bold;");
}

function printLog(str){
    log.textContent = (str + "\n") + log.textContent;
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