// computed properties of object

const key1 = "Name";
const key2 =  "lastname";

const value1 = "Moiz";
const value2 = "Makda";

const obj = {
    [key1]: value1,
    [key2]: value2
}

console.log(obj)

// you can use sprade operator in object just like you used it in array

// also you cant give same name to 2 keys 
// and if you mistakenly give 2 keys same name it will consider the key which is made last 

const obj1 = {
    key1 : 1,
    key2 : 2
}
console.log("obj1 = ",obj1)

const obj2 = {
    key3: 3,
    key4 : 4
}
console.log("boj2 = ",obj2)

const newobj = {...obj1,...obj2,key10:10}
console.log("newobj = ",newobj)