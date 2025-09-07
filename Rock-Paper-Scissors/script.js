let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".select");
const msg =document.querySelector("#msg");
const users = document.querySelector("#user-score");
const comps = document.querySelector("#comp-score");

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userId = choice.getAttribute("id");
        playGame(userId);
     });
});
const genCompChoice =()=>{
    const option =["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() *3) ;
    return option[ranIdx];
}
const playGame=(userId)=>{
   const compChoice = genCompChoice();
    
    if(userId === compChoice){
        drawGame();
     } else{
            let userWin = true;
            //scissors,paper
            if (userId ==="rock")
                {
                userWin =compChoice === "paper" ? false : true;
            }
           //rock,scissors
        else if(userId === "paper")  {
            userWin = compChoice === "scissors" ? false : true;
        }
        //rock,paper
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userId, compChoice);
        }
    }

const drawGame =() =>{
   msg.innerText="GAME WAS DRAW, TRY AGAIN.";
    }
const showWinner =(userWin, userId, compChoice) =>{
    if(userWin){
        userScore++;
        users.innerText =userScore;
        msg.innerText= `YOU WIN! your ${userId} beats ${compChoice}`;
    }
    else{
        compScore++;
        comps.innerText= compScore;
        msg.innerText= `YOU LOSE:) ${compChoice} beats your ${userId}`;
    }
};
