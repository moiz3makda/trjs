// dont do this mistakes



const user = {
    firstname : "moiz",
    age : 20,
    about : function()
    {
        console.log(this.firstname,this.age)
    }
}

const myfun = user.about;

myfun();

// dont do this because when you do this you are doing this

const myfun1 = function()
{
    console.log(this.firstname,this.age)
}

myfun1()

// so here js thinks that the value of "this" is "window object" so it will show undefined in the output
// so here you can use the bind method like this

const myfun3 = user.about.bind(user);
myfun3()