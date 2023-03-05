// create functions to create multiple objects

// when you want to make more than 1 objects you can make it like shown below


// function createuser(firstname,lastname,age,email,address)
// {
//     const user = {}
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     user.about = function()
//     {
//         return `${firstname} is ${age} years old`
//     }
//     user.is18 = function()
//     {
//         return this.age>=18;
//     }

//     return user;
// }

// const user1 = createuser("moiz","makda",20,"makdamoiz@gmail.com","ekjaan society");

// console.log(user1)
// console.log(user1.about());
// console.log(user1.is18());

// const usermethods = {
//     about : function()
//     {
//         return`${firstname} is `
//     }
// }


const usermethods = {
    about : function()
    {
        return `${this.firstname} is ${this.age} years old`
    },

    is18 : function()
    {
        return this.age>=18;
    }

}

function createuser(firstname,lastname,age,email,address)
{
    const user = {}
    user.firstname = firstname;
    user.lastname = lastname;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = usermethods.about;
    user.is18 = usermethods.is18;

    return user;
}

const user1 = createuser("moiz","makda",17,"makdamoiz@gmail.com","ekjaan society");
const user2 = createuser("aliasgar","makda",24,"makdaaliasgar@gmail.com","ekjaan society");

console.log(user1);
console.log(user1.about());
console.log(user1.is18());

console.log(user2);
console.log(user2.about());
console.log(user2.is18());