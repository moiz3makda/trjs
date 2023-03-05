// default parameter

function addition(a=0,b=0)
{
    return a+b;
}

// console.log(addition (3));

// rest parameter

// function myfun(a,b,...c)
// {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// myfun(1,2,3,4,5,6)

function addall(...a)
{
    let total = 0;
    for (let num of a)
    {
        total = total+num;
    }
    return total;
}

// console.log(addall(1,2,3,4,5,6))




// parameter destructuring

const person = {
    fname: "moiz",
    gender: "male"
}

function printdetail({fname,gender})
{
    console.log("name :: ",fname);
    console.log("gender :: ",gender);
}

printdetail(person);