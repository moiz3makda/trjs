// create your own methods

// methods are function inside objects




function personinfo()
    {
        console.log(/* the name of the person is moiz and the age is 20 *//* this */`the name of the person is ${this.firstname} and the age is ${this.age}`)
    }

const person = 
{
    firstname: "moiz",
    age: 20,
    about: personinfo // function()
   // {
    //     console.log(/* the name of the person is moiz and the age is 20 *//* this */`the name of the person is ${this.firstname} and the age is ${this.age}`)
    // }
}

// remember we are not callin the function inside the object we are setting it as a value of that key

const person2 = 
{
    firstname: "ali asgar",
    age: 23,
    about: personinfo // function()
   // {
    //     console.log(/* the name of the person is moiz and the age is 20 *//* this */`the name of the person is ${this.firstname} and the age is ${this.age}`)
    // }
}

const person3 = 
{
    firstname: "amtulla",
    age: 27,
    about: personinfo // function()
   // {
    //     console.log(/* the name of the person is moiz and the age is 20 *//* this */`the name of the person is ${this.firstname} and the age is ${this.age}`)
    // }
}

person.about()
person2.about()
person3.about()


// you don't need to write the key-value pair for writing function you can directly do this insted 
// you can directly write the method

const person4 = 
{
    firstname : "fatema",
    age : 18,
    about()
    {
        console.log(`the name of the person is ${this.firstname} and the age of the person is ${this.age}`);
    }
}

person4.about()