// arrow functions and this

// there is no 'this' in arrow function
// 'this' of the arrow function is "window object"
// you can't change the 'this' of the arrow function




const user = {
    firstname : "moiz",
    age : 20,
    about : () =>
    {
        console.log(this)
        console.log(this.firstname,this.age);
    }
}

user.about()