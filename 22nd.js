// filter method
// filters call-back function has to return boolean value
// if the cll-back function returns true then the filter method stores it in the new array if function returns false then it is not going to store that value



// examples
// const numbers = [1,3,2,6,4,8];

// const isEven = function(number)
// {
//     return number%2===0;
// }

// const evenNumbers = numbers.filter(isEven)

// console.log(evenNumbers)
// ================================================
const numbers = [1,3,2,6,4,8];

const isOdd = function(number)
{
    return number%2!==0;
}

const oddNumbers = numbers.filter(isOdd)

console.log(oddNumbers)