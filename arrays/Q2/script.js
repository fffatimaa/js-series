//All items have an offer 10% nd store finals price

let items= [250,350,450,550,650];

for(let i=0; i< items.length; i++){
    let offer= items[i]/10;
    items[i]-= offer;
}
console.log("Final price:", items);