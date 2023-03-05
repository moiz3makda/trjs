// optional chaining

// optional chaininig is used when you don't know that your object have any info or not
// regulerly you use "." operator to access the element of the object but if there is no element like that then it will show error 
// but when you don't want to stop the execution of your program you can use "?." to access the elements of the object it will first check that do you have the object, after that it will check that do you have that elemenet and if you don't have that element then it will stop serching for that element and will return undefined other then error
// it is mostly used in nested objects




const user = {
    firstname: "moiz",
    // address : {housenumber: "17",
    //             homename : "aamin",
    //         owner : "mansurbhai"}
}

console.log(user.firstname)
console.log(user?.address?.housenumber)
console.log(user.address.housenumber)