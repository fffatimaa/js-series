//* take input from user and create array no fron 1 to n.
//* use reduce to cal sum of all no in arr.

let n=prompt("enter the no : ");
let arr=[];

for (let i=1; i<n; i++){
    arr[i-1] =i;
}

console.log(arr);

let sum =arr.reduce((res,curr)=>{
    return res + curr;
})
console.log("sum =", sum);

let factorial =arr.reduce((res,curr)=>{
    return res * curr;
})
console.log("factorial =", factorial);