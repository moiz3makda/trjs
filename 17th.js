// lexical scope

const myvar = "not inside the function"

function myapp()
{
    // const myvar = "inside the myapp function"
    function myfunc()
    {
        // const myvar = "inside the myfunc function"
        // console.log("inside my func",myvar);
        const myfunction = function()
        {
            console.log("from myfunction",myvar);
        }
        myfunction();
    }

    console.log(myvar);
    myfunc();
}

myapp();



// block scope and function scope

// let and const are block scope
// var is function scope

