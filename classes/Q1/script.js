//create a class User with a 2 properties name,email
let Data = "Secert information";
class User{
    constructor(name,email){
        this.name= name;
        //variable this.email= email; //jo hum pass kr rhy hain
    }
    viewData(){         //method ViewData
        console.log("data = ", Data);
    }
}
let student1= new User("FATIMA","123@email.com");    //constructor function
let student2= new User("FAISAL","456@email.com");

// new class admin inherits from user

class admin extends User{
    constructor(name ,email){
        super(name, email);       //calls parent constructor
    }
    editData(){   
        Data = "HEHEHE NO INFO";
    }
}
let admin1 = new admin("ALISHA","789@email.com");