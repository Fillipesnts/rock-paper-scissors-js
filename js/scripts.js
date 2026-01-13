const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const playBtn = document.querySelector("#play-btn");
const choiced = document.querySelector("#choiced");
const resultContainer = document.querySelector("#result-container");
let playerPoints = document.querySelector("#player1-points");
let iaPoints = document.querySelector("#player2-points");

let choice = null;
let playerPlacar = 0;
let iaPlacar = 0;

function selectChoice(value) {
    if (choice === null) {
        choice = value;
        choiced.innerText = `${value} foi escolhido!`;
    } else {
        choiced.innerText = `Você já escolheu ${choice}.`;
    }
}

rockBtn.addEventListener("click", () => selectChoice("pedra"));
paperBtn.addEventListener("click", () => selectChoice("papel"));
scissorsBtn.addEventListener("click", () => selectChoice("tesoura"));

const possibleChoices = ["pedra", "papel", "tesoura"];

function iaChoice() {
    const randomChoice = Math.floor(Math.random() * possibleChoices.length);
    return possibleChoices[randomChoice];
}

function playPedraPapelTesoura() {
    if(!choice) {
        choiced.innerText = `Você precisa escolher entre pedra, papel ou tesoura!`;
        return;
    }

    const iaChoicedOption = iaChoice();
    let winner = null;

    if(choice === iaChoicedOption) {
        const templateDraw = `<section>
        <div class="result">
            <h3>Você jogou <span id="player1-choice">${choice}</span> e Antônio jogou <span id="player2-choice">${iaChoicedOption}</span>, portanto... <span id="winner">Empate!</span>`;

        resultContainer.innerHTML = templateDraw;
        choiced.innerText = `Escolha novamente!`;
        return choice = null;
    } else if (choice === "pedra" && iaChoicedOption === "papel") {
        winner = "Antônio"
        
        const templateWin = `<section>
        <div class="result">
            <h3>Você jogou <span id="player1-choice">${choice}</span> e Antônio jogou <span id="player2-choice">${iaChoicedOption}</span>, portanto... <span id="winner">${winner} venceu!</span>
        </section>`;

        resultContainer.innerHTML = templateWin;
        choiced.innerText = `Escolha novamente!`;
    } else if (choice === "pedra" && iaChoicedOption === "tesoura") {
        winner = "Você";

        const templateWin = `<section>
        <div class="result">
            <h3>Você jogou <span id="player1-choice">${choice}</span> e Antônio jogou <span id="player2-choice">${iaChoicedOption}</span>, portanto... <span id="winner">${winner} venceu!</span>
        </section>`;

        resultContainer.innerHTML = templateWin;
        choiced.innerText = `Escolha novamente!`;
    } else if (choice === "papel" && iaChoicedOption === "pedra") {
        winner = "Você";

        const templateWin = `<section>
        <div class="result">
            <h3>Você jogou <span id="player1-choice">${choice}</span> e Antônio jogou <span id="player2-choice">${iaChoicedOption}</span>, portanto... <span id="winner">${winner} venceu!</span>
        </section>`;

        resultContainer.innerHTML = templateWin;
        choiced.innerText = `Escolha novamente!`;
    } else if (choice === "papel" && iaChoicedOption === "tesoura") {
        winner = "Antônio"
        
        const templateWin = `<section>
        <div class="result">
            <h3>Você jogou <span id="player1-choice">${choice}</span> e Antônio jogou <span id="player2-choice">${iaChoicedOption}</span>, portanto... <span id="winner">${winner} venceu!</span>
        </section>`;

        resultContainer.innerHTML = templateWin;
        choiced.innerText = `Escolha novamente!`;
    } else if (choice === "tesoura" && iaChoicedOption === "papel") {
        winner = "Você";

        const templateWin = `<section>
        <div class="result">
            <h3>Você jogou <span id="player1-choice">${choice}</span> e Antônio jogou <span id="player2-choice">${iaChoicedOption}</span>, portanto... <span id="winner">${winner} venceu!</span>
        </section>`;

        resultContainer.innerHTML = templateWin;
        choiced.innerText = `Escolha novamente!`;
    } else if (choice === "tesoura" && iaChoicedOption === "pedra") {
        winner = "Antônio"
        
        const templateWin = `<section>
        <div class="result">
            <h3>Você jogou <span id="player1-choice">${choice}</span> e Antônio jogou <span id="player2-choice">${iaChoicedOption}</span>, portanto... <span id="winner">${winner} venceu!</span>
        </section>`;

        resultContainer.innerHTML = templateWin;
        choiced.innerText = `Escolha novamente!`;
    }

    if(winner === "Você") {
        playerPlacar++;

        playerPoints.innerText = playerPlacar;
    } 
    
    if (winner === "Antônio") {
        iaPlacar++;

        iaPoints.innerText = iaPlacar;
    }

    return choice = null;
}

playBtn.addEventListener("click", playPedraPapelTesoura);