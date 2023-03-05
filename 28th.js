// fill method



//if you want to make an array which is filled with a single number you can use the fill method like below 

// const myarray = new Array(10).fill(3);
// console.log(myarray)

// if you want to chage the numbers 3,4,5 with any other number then you can see the below example
// syntax of the fill method is 
// fill(the value which you wnat to fill the elements with,staring index for filling, ending index for filling)
const myarray=[1,2,3,4,5,6,7,8];
myarray.fill(0,2,5);
console.log(myarray)