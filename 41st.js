// solution using object.create



const usermethods = {
    about : function()
    {
        return `${this.firstname} is ${this.age} years old`
    },

    is18 : function()
    {
        return this.age>=18;
    },
    play: function()
    {
        return "bgmi";
    }

}

function createuser(firstname,lastname,age,email,address)
{
    const user = Object.create(usermethods)
    user.firstname = firstname;
    user.lastname = lastname;
    user.age = age;
    user.email = email;
    user.address = address;

    return user;
}

const user1 = createuser("moiz","makda",17,"makdamoiz@gmail.com","ekjaan society");
const user2 = createuser("aliasgar","makda",24,"makdaaliasgar@gmail.com","ekjaan society");


console.log(user1.about());
console.log(user1.is18());


console.log(user2.about());
console.log(user2.is18());