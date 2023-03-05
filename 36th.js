// what happen when you directly print "this" like this


// it will give you the window object whrere you can find all the methods of the js
// console.log(this);
// also you can do this to get the same output
// console.log(window);

// this object is provided by the js

// also you can write this objects directly in the console
// and you can also check if 'this' and 'window' are equal like this

// console.log(this===window)


// function myfun()
// {
//     console.log("hello world")
// }

// myfun();

// now you can find myfun in the window object

// if you execute the below function it will print the window objet 
function myfun()
{
    // "use strict"
    console.log(this);
}

myfun();

// but if you don't want to do that you can use strict mode
// you can use strict mode anywhere in the file
// after that it will return undefined in the output