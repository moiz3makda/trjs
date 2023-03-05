// every method

// it also gets call-back function as an input
// call-back function has to return in boolean to use it with every method
// and after processing every method also returns boolean if all the elements of the array returns true or else every method returns false
// if the condition is setisfied with all the elements then the every method returns true othervice it returns false


// const numbers = [2,4,6,8,10];

// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

// example
// check if the price of the every product is under 30000

const usercart = [
    {productid:1, name:"mobile", price:12000},
    {productid:2, name:"laptop", price:22000},
    {productid:3, name:"tv", price:15000},
]

function proprice(item)
{
    return item.price<30000;
}

const res = usercart.every(proprice)
console.log(res)