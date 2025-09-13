const dropdowns = document.querySelectorAll(".dropdown select");


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



