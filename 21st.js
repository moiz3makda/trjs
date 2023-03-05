// map mathod

// map is the method of array
// map get input as a call-back function
// map gets a returning value of the call-back function and makes a new array
// if the function is not returning anything then map stores undefined in the new array
// so you have to return a value in a function if you want to use it in a map method

// examples

// const numbers = [3,4,6,1,8];

// const square = function(number,index)
// {
//     return `index ${index}: ${number*number}`;
// }

// const squarenumbers = numbers.map(square);

// console.log(squarenumbers)

const users = [
    {firstname: "moiz" , age : 20},
    {firstname : "ali asgar", age : 23},
    {firstname : "amtulla", age : 26},
    {firstname : "fatema", age : 18}
]
const usernames = users.map((user)=>{
    return user.firstname;
});

console.log(usernames)