// object.create




const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = Object.create(obj1);
obj2.key3="value3"
// obj2.key2="new value2"
console.log(obj2)
console.log(obj2.__proto__);
// this is how you can check the connection between objects
// one more this is that the "__proto__" and [[prototype]] is the same in the js
// but there is also prototype property in function which is different from this and which you are going to see next

// object.create connects the object2 to defined object in the object.create(____)
// and when we try to use the key which is not available in the obj2 then it goes to check if that key is present in the defined object if it is there it will show us the value of that key from the defined object