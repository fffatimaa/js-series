const URL ="https://api.thecatapi.com/v1/images/0XYvRd7oD";

const getFact =async () =>{
    console.log("getting data");
    let reponse = await fetch(URL); //data taken from fetch
    console.log(reponse);       // not readable
    let data = await reponse.json();   //json()return second promise make it readable
    console.log(data);

};