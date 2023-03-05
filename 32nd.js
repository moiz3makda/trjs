// Maps
// map stores key value pair
// in object you can only make key of string or symbol, but in map you can make key of anytype
// you can add the key value pair in map using '.set()' method
// you can't access the key value pair in map like object
// you can only access the key value pair using '.get(write key here)' method
// and if you want to print the keys of your map then you can use the '.keys()' method
// map is itrable
// we can't use for of loop on object we can use for in loop on objects
// and we can use for of loop on map
// with for of loop it returns the array
// and we can destructure the array which you can see in the example
// it is ordered




// curly brace lagadi ne je key value pair aapne lakhiee tene object litrals pan kahevay
// key -->  string
// key -->  symbol
// const person =
// {
//     firstname: "moiz",
//     age: 20,
//     1:"one"
// };
// console.log(person.firstname);
// console.log(person["firstname"])
// for(let key in person)
// {
//     console.log(typeof(key))
// }

// const person = new Map();
// person.set('firstname','moiz');
// person.set('age',20);
// person.set(1,"one")
// person.set([1,2,3],"array of one two three")
// person.set({1:"one"},"object litral of one")
// console.log(person);
// console.log(person.get('firstname'))
// console.log(person.get('age'))
// console.log(person.get(1))
// console.log("====================")
// // console.log(person.keys())

// for(let key of person.keys())
// {
//     console.log(key,typeof(key))
// }


// for(let key of person)
// {
//     console.log(key)
//     console.log(Array.isArray(key))
// }

// array destructured
// for(let [key,value] of person)
// {
//     console.log(key,value)
// }

// you can also make map like this
// const person = new Map([['firstname','moiz'],['age',20],['gender','male']])
// console.log(person)


const person = {
    id : 1,
    firstname: 'moiz'
}

const person2 = {
    id : 1,
    firstname: 'amtulla'
}



// now you want to store more info about person but you don't want to store it in the object then you can store it in the map
// you just have to make a map and you have to set the object as a key of that map just like shown below

const extrainfo = new Map()
{
    extrainfo.set(person,{age:20,gender:"male"})
    extrainfo.set(person2,{age:26,gender:"female"})
}

// console.log(userinfo)

// now how can you use it

console.log(person.id)
console.log(extrainfo.get(person))
console.log(extrainfo.get(person).age)
console.log(person2)
console.log(extrainfo.get(person2).age)
