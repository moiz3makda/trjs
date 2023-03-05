// what is prototype

// in js you treat function like function but you can also treat function like object
// function in js is combo of the function and object
// for proof 
// there is a property called ".name" in function with which you can get the name of the function itself
// just like this function provides more usefull properties like call, apply, bind which we already seen
// so you have to remember that the function can work like the function but at the same time work like the object also
// function gives us a free object(or else you can say empty object) which is also called prototype
// it is given to us so that if we want to add any key-value pair releted to functio, we can do that by adding that in the prototype
// this prototype property is only provided by the functions

// function hello()
// {
//     console.log("hello world");
// }

// hello()

// console.log(hello.name);
// this is the property to see the name of the function 
// now you can also add your own property in the function like this
// just like we add a key-value pair in the object


// hello.mypro = "this property is added by me"
// console.log(hello.mypro)

// console.log(hello.prototype);

// const hello = {key: "value"}  // object

// const hello = ["value1","value2"]  // array

// if(hello.prototype)
// {
//     console.log("there is prototype")
// }
// else
// {
//     console.log("there is no prototype")
// }


// function hello()
// {
//     console.log("hello world");
// }



// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.play = function(){
//     return "playing bgmi";
// }

// console.log(hello.prototype)
// console.log(hello.prototype.play())