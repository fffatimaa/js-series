let boxes =document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

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
    })
})
