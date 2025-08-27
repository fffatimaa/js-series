let cars=["Civic","BMW","Mercedes","Audi","Lamborghini","Porsche"];

//*remove the first car from array
cars.shift();
console.log("After shift:", cars);

//* Remove Mercedes nd add Ferrari
cars.splice(2,1,"Ferrari");
console.log("After replacing Mercedes:", cars);

//*Add kia at end
cars.push("kia");
console.log("After push Kia:", cars);

