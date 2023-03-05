// cloning using object.assign







const obj = {
    key1 : "value1",
    key2 : "value2"
};

const obj2 = {...obj};  // this is new method of clonig
// or else you can do this like this also
const obj3 = Object.assign({key3: "value3"},obj,{key4:"vlaue4"}) // this is old method of cloning
console.log("this is obj3",obj3)

console.log("this is obj",obj);
console.log("this is obj2",obj2);

obj.key3="value3"

console.log(obj);
console.log(obj2);