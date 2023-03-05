// classes in js

// function Createuser(firstname,lastname,age,email,address)
// {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//     this.email = email;
//     this.address = address;

//     // return this;
// }

// Createuser.prototype.about = function()
// {
//     return `${this.firstname} is ${this.age} years old`;
// }
// Createuser.prototype.is18 = function()
// {
//     return this.age>=18;
// }
// Createuser.prototype.play = function()
// {
//     return "playing bgmi";
// }

// now we are going to make the above program using class




class Createuser{
    constructor(firstname,lastname,age,email,address)
    {
        console.log("constructor called");
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.address = address;
    }

    about()
    {
        return `${this.firstname} is ${this.age} years old`;
    }
    is18()
    {
        return this.age>=18;
    }
    play()
    {
        return `${this.firstname} is playing bgmi now`;
    }
    passthis(a)
    {
        console.log(a);
    }
}

const user1 = new Createuser("moiz","makda",20,"makdamoiz@gmail.com","ekjaan society");

console.log(user1.play());
user1.passthis("hello user");
console.log(Object.getPrototypeOf(user1));