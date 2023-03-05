console.log("primitive datatype");

let num1=6;
let num2=num1;
console.log("value is numl is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1")
console.log("value is numl is", num1);
console.log("value is num2 is", num2);

console.log("raferance datatype");

let array1 = [1,2,3];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push(4);
console.log("after pushing 4 in array1")
console.log(array1);
console.log(array2);