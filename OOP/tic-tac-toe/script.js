class TicTacToe {
  constructor() {
    this.boxes = document.querySelectorAll(".box");
    this.resetBtn = document.querySelector("#reset-btn");
    this.newGameBtn = document.querySelector("#new-btn");
    this.msgContainer = document.querySelector(".msg-container");
    this.msg = document.querySelector("#msg");
    
    this.turnO = true;

    this.winPatterns = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    this.addBoxListeners();
    this.resetBtn.addEventListener("click", () => this.resetGame());
    this.newGameBtn.addEventListener("click", () => this.resetGame());
  }

  // Add event listeners to all boxes
  addBoxListeners() {
    this.boxes.forEach((box) => {
      box.addEventListener("click", () => this.handleBoxClick(box));
    });
  }
  handleBoxClick(box) {
    if (this.turnO) {
      box.innerText = "O";
      this.turnO = false;
    }
     else 
        {
      box.innerText = "X";
      this.turnO = true;
    }
    box.disabled = true;
    this.checkWinner();
  }
  checkWinner() {
    for (let pattern of this.winPatterns) {
      let pos1Val = this.boxes[pattern[0]].innerText;
      let pos2Val = this.boxes[pattern[1]].innerText;
      let pos3Val = this.boxes[pattern[2]].innerText;

      if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          this.showWinner(pos1Val);
          return;
        }
      }
    }
  }
  showWinner(winner) {
    this.msg.innerText = `Congratulations, Winner is ${winner}`;
    this.msgContainer.classList.remove("hide");
    this.disableBoxes();
  }
  disableBoxes() {
    for (let box of this.boxes) {
      box.disabled = true;
    }
  }
  enableBoxes() {
    for (let box of this.boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  }
  resetGame() {
    this.turnO = true;
    this.enableBoxes();
    this.msgContainer.classList.add("hide");
  }
}
// Start the game
const game = new TicTacToe();

