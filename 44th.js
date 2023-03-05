// changed the old program according to function prototype




// const usermethods = {
//     about : function()
//     {
//         return `${this.firstname} is ${this.age} years old`
//     },

//     is18 : function()
//     {
//         return this.age>=18;
//     },
//     play: function()
//     {
//         return "bgmi";
//     }

// }

function createuser(firstname,lastname,age,email,address)
{
    const user = Object.create(createuser.prototype)
    user.firstname = firstname;
    user.lastname = lastname;
    user.age = age;
    user.email = email;
    user.address = address;

    return user;
}

createuser.prototype.about = function()
{
    return `${this.firstname} is ${this.age} years old`;
}
createuser.prototype.is18 = function()
{
    return this.age>=18;
}
createuser.prototype.play = function()
{
    return "playing bgmi";
}

const user1 = createuser("moiz","makda",17,"makdamoiz@gmail.com","ekjaan society");
const user2 = createuser("aliasgar","makda",24,"makdaaliasgar@gmail.com","ekjaan society");


console.log(user1.about());
console.log(user1.is18());


console.log(user2.about());
console.log(user2.is18());