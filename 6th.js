// array destructuring

const myarray = [1, 2, 3, 4, 5];
let [myvar1, myvar2, ...myarray1] = myarray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log("value of myarray1", myarray1)