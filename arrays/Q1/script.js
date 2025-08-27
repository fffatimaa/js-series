//avg marks of class

let marks=[20,34,45,88,99,56];

let sum = 0;
for(let val of marks) {
    sum +=val;
}

let avg = sum / marks.length;
console.log(`the avg marks of class = ${avg}`);