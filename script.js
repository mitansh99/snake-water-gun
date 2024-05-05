

let score = 0;
let scoreUpate = document.querySelector("#score")
let result = document.querySelector("#result")

let arrBasic = ["snake" , "water" , "gun"];

function checkWin(playerClick) {

    let randomGuess = parseInt(Math.random() * 3);

    if(playerClick == arrBasic[randomGuess]){
        result.innerHTML = "Match tie";
    }
    else if(playerClick == "snake" && randomGuess == 1){
        result.innerHTML = "You Win";
        score++;
    } else if(playerClick == "water" && randomGuess == 2){
        result.innerHTML = "You Win";
        score++;
    } else if(playerClick == "gun" && randomGuess == 0){
        result.innerHTML = "You Win";
        score++;
    } else{
        result.innerHTML = "You lost";
    }
    scoreUpate.innerHTML = "Your score is :> " + score;
}