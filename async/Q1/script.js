//Callbacks function
//*function sum(a,b){
   //* console.log(a+b);
//*}
//*function calculator(a,b,sumCallback){
   //* sumCallback(a,b);
//*}
//*calculator(4,4,sum);

//*Callback async
//*const hello=() =>{
   //* console.log("hello");
//*};
//*setTimeout(hello,8000);   //*setTimeout takes callback

//*Callback Hell
//*function getData(dataId,getNextData){

   //* setTimeout( () => {
        //*console.log("data" ,dataId);
        //*if(getNextData){    //*to get the second callback
        //*    getNextData();
       //* }
   //* },8000);
//*}
//*getData(1, () => {
   //* console.log("getting data 2 in 8s");
  //*  getData(2);
//*}); 

//*Promises solution of Callback Hell

//*let promise = new Promise((resolve, reject)=> {
    //*console.log("hello");
   //* reject("error occured");
//*});

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },6000);
    });
}


