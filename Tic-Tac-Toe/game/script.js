let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 

//All possible winning patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
//add eventlistener what happens when a box is clicked
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO){
          //playerO
          box.innerText ="O";
          //next turn will be for X
          turnO = false;
       }
       else{
        //playerX
        box.innerText ="X";
        //next turn will be for O
        turnO =true;
       }
       box.disabled = true;
       //can't be clicked again

       checkWinner();
    });
});
    const checkWinner = () =>{
        for (let pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
        }
    };
    const showWinner = (winner) => {
        msg.innerText= `Congratualations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();

    }
    const disableBoxes =() =>{
        for(let box of boxes){
            box.disabled = true;
        }
    };
    const enableBoxes =() =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText ="";
        }
    };
    const resetGame =() =>{
        turnO= true;
        enableBoxes();
        msgContainer.classList.add("hide");
    };
    newGameBtn.addEventListener("click" , resetGame);
    resetBtn.addEventListener("click" , resetGame);
