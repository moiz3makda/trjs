// reduse method
// reduse get call-back function as an input
// you can also pass the initial value of accumulator after the call-bac function as shown in example




// examples

// const numbers = [1,2,3,4,5,10];

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator+currentValue;
// },100);

// console.log(sum)

// how it works


// if there is no initial value of accumulator
// accumulator         currentValue         return
// 1                       2                  3
// 3                       3                  6
// 6                       4                  10
// 10                      5                  15
// 15                      10                 25


// if there is initial value accumulator
// accumulator         currentValue         return
// 100                     1                  101
// 101                     2                  103
// 103                     3                  106
// 106                     4                  110
// 110                     5                  115
// 115                     10                 125


const usercart = [
    {productid:1, productname:"mobile", productprice:12000},
    {productid:2, productname:"laptop", productprice:22000},
    {productid:3, productname:"tv", productprice:15000},
]

const totalamount = usercart.reduce((totalprice,currentproduct)=>{
    return totalprice + currentproduct.productprice;
},0)

console.log(totalamount)