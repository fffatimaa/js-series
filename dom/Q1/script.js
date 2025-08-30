//*create h2 heading with text nd add append text using js 
let h2 = document.querySelector("h2");

console.dir(h2.innerText);
h2.innerText = h2.innerText + "Learning JavaScript";

//*create 3 divs with common class name box
//*access them nd add unique text
let boxs = document.querySelectorAll(".box");
let idx= 1;

for (text of boxs){
    text.innerText =`JavaScript ${idx}`;
    idx++;
}


