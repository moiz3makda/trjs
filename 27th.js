// some method

// is used to check if any of the element of the array is setisfying the condition



// const numbers = [3,5,8,9];
// const ans = numbers.some((number)=>number%2===0);
// console.log(ans)


const usercart = [
    {productid:1, productname:"mobile", productprice:12000},
    {productid:2, productname:"laptop", productprice:22000},
    {productid:3, productname:"tv", productprice:15000},
    {productid:4, productname:"macbook", productprice:250000}
]

function product(item){
    return item.productprice>100000
}

const res = usercart.some(product);
console.log(res)