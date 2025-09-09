//Callbacks function
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(4,4,sum);

//*Callback async
const hello=() =>{
    console.log("hello");
};
setTimeout(hello,8000);   //*setTimeout takes callback

//*Callback Hell
function getData(dataId,getNextData){

    setTimeout( () => {
        console.log("data" ,dataId);
        if(getNextData){    //*to get the second callback
            getNextData();
        }
    },8000);
}
getData(1, () => {
    console.log("getting data 2 in 8s");
    getData(2);
}); 

//*Promises solution of Callback Hell

let promise = new Promise((resolve, reject)=> {
    console.log("hello");
    reject("error occured");
});

function getData(dataId, getNextData){    //*data return
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
//promise

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("data",dataId);
            resolve("success");
        

        },5000);

    });
}
//Promise Chain
console.log("getting data one");
getData(1)
  .then((res)=>{     //runs after a Promise is resolved
    console.log("getting data two");
    return getData(2);   //passed to the next then()
  })
  .then((res) =>{
    console.log("getting data three");
    return getData(3);
  })
  .then((res)=>{
    console.log(res);
  });

//Async-Await
  function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },4000);

    });
  }
  async function getAllData(){
    console.log("getting data 1");
    await getData(1);
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3); 
  }

//IIFE(immediately invoked function expression)
  (async function () {
    console.log("getting data 1");
    await getData(1);
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3); 
  })();





