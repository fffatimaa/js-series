//create a newbtn nd give it text,background,fontcolor
//insert the btn as the first element in body tag

let newbtn = document.createElement("button");
newbtn.innerText="click me";

newbtn.style.backgroundColor="red";
newbtn.style.color="white";

document.querySelector("body").prepend(newbtn);

//select p tag
//add new class, old class safe using classList
let para = document.querySelector("p");
para.classList.add("newClass");

