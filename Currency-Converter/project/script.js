const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromCurr= document.querySelector(".from select");
const toCurr= document.querySelector(".to select");

for (select of dropdowns){
    for(country in countryList){
        let countryOption = document.createElement("option");
        countryOption.value = country;
        countryOption.innerText = countryList[country];
        select.append(countryOption);
    }
}
dropdowns[0].value;
dropdowns[1].value;
 
function flagUpdate(selectElement) {
    let currencyCode = selectElement.value; 
    let countryCode = countryList[currencyCode];
    let img = selectElement.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}
for (let select of dropdowns) {
    select.addEventListener("change", (event) => {
        flagUpdate(event.target);
    });
}

button.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount =document.querySelector(".amount input");
    let amtVal= amount.value;
   if(amtVal ==="" || amtVal < 1){
    amtVal=1;
    amount.value="1";
   }
   const URL = `https://api.frankfurter.app/latest?amount=${amtVal}&from=${fromCurr.value}&to=${toCurr.value}`;
   let response = await fetch(URL);
   let data = await response.json();
   let rate = data.rates[toCurr.value];
   console.log(`Converted amount: ${rate}`);
});

