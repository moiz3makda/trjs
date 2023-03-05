// sort method

// sort method mutates/changes the original array
// if you dont want to change the original array you can use the spread/slice operator
// other array methods like foreach, map, filter dont changes the original array it makes new array 
// js sorts array as a string not as a number
// so first it changes the numbers into the strings and sort it with assci code of the first letter of the string
// js sorts the array according to the assci code
// sort methos also can get call-back function as an input as an optional argument


// const numbers = [5,9,1200,400,3000];

// numbers.sort();
// console.log(numbers)

// usernames = ['moiz','MOIZ','amtulla','fatema','aliasgar']
// usernames.sort();
// console.log(usernames)

// const numbers = [5,9,1200,400,3000];

// numbers.sort((a,b)=>{
//     return a-b;
// });


// console.log(numbers)

// how this works

// this is for asscending order
// if a=1200 & b=400
// a-b --->800
// if a-b ---> positive(greater then 0)
// if it is positve it alters/swap the numbers and if it is negative it dont
// vica versa for desending order



// irl example

const products = [
    {productid:1, productname:"p1", productprice:300},
    {productid:2, productname:"p2", productprice:3000},
    {productid:3, productname:"p3", productprice:200},
    {productid:4, productname:"p4", productprice:8000},
    {productid:5, productname:"p5", productprice:500},
]

// sort this in low to high
const lowtohigh = products.slice(0).sort((a,b)=>{
    return a.productprice-b.productprice;
});

console.log("prosucts without sorting",products)
console.log("sorted products",lowtohigh)

// 