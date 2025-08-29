//* filter out the marks of student that scored 90+

let marks =[90,45,33,94,98];

let toppers= marks.filter((val)=>{
    return val>=90;
});
console.log(toppers);