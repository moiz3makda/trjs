// new keyword







// function createuser(firstname, age)
// {
//     this.firstname = firstname;
//     this.age = age;
// }

// createuser.prototype.about = function()
// {
//     console.log(`${this.firstname} is ${this.age} years old`)
// }

// const user1 = new createuser("moiz",20);

// new keyword is doing 3 things now
// 1.) it is creatig empty object and reffering it to "this" (this = {})
// 2.) return "this" (empty object)
// 3.) the connection which we are making using Object.create is also done by the new keyword

// user1.about();






// if you are making a function which is only be called with new keyword you have to start it with the capital letter it is convention

// this is also called constructor function
function Createuser(firstname,lastname,age,email,address)
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    this.address = address;

    // return this;
}

Createuser.prototype.about = function()
{
    return `${this.firstname} is ${this.age} years old`;
}
Createuser.prototype.is18 = function()
{
    return this.age>=18;
}
Createuser.prototype.play = function()
{
    return "playing bgmi";
}

const user1 =new Createuser("moiz","makda",17,"makdamoiz@gmail.com","ekjaan society");
const user2 =new Createuser("aliasgar","makda",24,"makdaaliasgar@gmail.com","ekjaan society");


console.log(user1.about());
console.log(user1.is18());
console.log(user1)


console.log(user2.about());
console.log(user2.is18());