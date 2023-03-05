// sets 

// sets are itrable
// you can't insert duplicate item in the sets or you can say that you can't store one element more then once / unique items only
// you can't access the item of the set using index like array ==> it shows undefined when you try this
// there is no order in set like array
// you can make set using any itrable just like the example given below we used array and string in that set 
// you can stroe multiple datatypes in set at the time like array
// you cant use length property on set ==> it shows undefined whet you try the same



// const numbers = new Set([1,2,3]);
// console.log(numbers);

// const alpha = new Set("moiz")
// console.log(alpha);

// const items = ['item1','item2','item3']
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items); // you can't add this array twise like this
// numbers.add(['item1','item2']); 
// numbers.add(['item1','item2']);  // but like this you can add same array multiple time because the address of the both arrays are different in this situation
// console.log(numbers);

// some of the methods of set

// if you want to check if the element is in the set or not
// console.log(numbers.has(1));
// if(numbers.has(1))
// {
//     console.log("1 is present in the set")
// }
// else
// {
//     console.log("there is no 1 in the set")
// }


// check if set is itrable using for of loop

// for (let number of numbers)
// {
//     console.log(number);
// }

// by this example you can say that set is itrable


// when to use set

// use set when you know that you are only going to get unique values and you are not going to get same values twise

// example
// you can also use set when you want to get unique values from an array for this you can see below example

// const numbers = [1,2,3,4,4,5,6,5,6];
// const uniquenumbers = new Set(numbers);
// console.log(uniquenumbers);
// console.log(numbers);

// // you canfind the length of the set using below logic

// let length = 0;
// for(let number of uniquenumbers)
// {
//     length++;
// }
// console.log(length)

// // or else you can use size property of set to find out the length of the set like this
// console.log(uniquenumbers.size);