// declaring function and function expression

// when you assign a anonymas function to a variable it is called as function expression 
// and in function expression the name of the variable is treated like the name of the function

//this is called function declaration
function singsong()
{
    console.log("happy birthday to you.........");
}

singsong()


//and this is called function expression
const singasong = function(){
    console.log("happy birthday to moiz...")
}

singasong()

function sum(a,b,c)
{
    console.log(a,b,c);
    return a+b+c;
}

function oddoreven(a)
{
    if(a===0)
    {
        console.log(a," is zero")
    }
    else if(a%2===0){
        console.log(a," is even number")
    }
    else{
        console.log(a," is odd number")
    }
}

// console.log(oddoreven(3))

function firstchar(str)
{
    return str[0];
}

// console.log(firstchar("Moiz"))

function findtarget(array, target)
{
    for(let i=0; i<array.length; i++)
    {
        if(array[i]===target)
        {
            return i;
        }
    }
    return ("Target not found");
}


// a=[1,2,3,4,5,6]

// console.log(findtarget(a,3))