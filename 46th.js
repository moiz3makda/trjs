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


// if you want to see the keys of the user you can see it like shown below
// but with this method it will show all the keys the user have and it's prototype have
for(let key in user1)
{
    console.log(key)
}

// but what if you only want to see the keys which user have not the keys which it's prototype have then you can use the method shown below

console.log("=====================")

for(let key in user1)
{
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}
