// callback function

function myfun2(name){
    console.log("inside the another function")
    console.log(`your name is ${name}`)
}


function myfun(callback){
    // console.log(a);
    console.log("hello world");
    callback("Moiz");
}

// myfun(myfun2)

// when you call a function as an input inside a another funtion and call it from inside the function it is called callback functuion example given above


// when you get an function as an input and call it from the function it is called callback function


// function returning function 

function first(){
    function inner(){
        console.log("this is inner function");
        return "this is return string in the inner function"
    }
    return inner;
}

const ans = first();
ans();
console.log(ans())


// or you can do this also

// function first()
//     return function(){
    // return "this is return string in the inner function"
//          };
// }

// const ans = first();
// ans();
// console.log(ans())


// when a function is getting funcion as an input or returning a function or doing both it is called higher order function