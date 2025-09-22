class RockPaperScissors {
  constructor() {
   
    this.choices = document.querySelectorAll(".select");
    this.msg = document.querySelector("#msg");
    this.users = document.querySelector("#user-score");
    this.comps = document.querySelector("#comp-score");

    this.userScore = 0;
    this.compScore = 0;

    this.addChoiceListeners();
  }
  addChoiceListeners() {
    this.choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        const userId = choice.getAttribute("id");
        this.playGame(userId);
      });
    });
  }
  genCompChoice() {
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
  }
  playGame(userId) {
    const compChoice = this.genCompChoice();

    if (userId === compChoice) {
      this.drawGame();
    } else {
      let userWin = true;

      if (userId === "rock") {
        userWin = compChoice === "paper" ? false : true;
      } else if (userId === "paper") {
        userWin = compChoice === "scissors" ? false : true;
      } else {
        userWin = compChoice === "rock" ? false : true;
      }

      this.showWinner(userWin, userId, compChoice);
    }
  }
  drawGame() {
    this.msg.innerText = "GAME WAS DRAW, TRY AGAIN.";
  }
  showWinner(userWin, userId, compChoice) {
    if (userWin) {
      this.userScore++;
      this.users.innerText = this.userScore;
      this.msg.innerText = `YOU WIN! Your ${userId} beats ${compChoice}`;
    } else {
      this.compScore++;
      this.comps.innerText = this.compScore;
      this.msg.innerText = `YOU LOSE :) ${compChoice} beats your ${userId}`;
    }
  }
}
const game = new RockPaperScissors();
