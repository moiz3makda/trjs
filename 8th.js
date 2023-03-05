// iteration in object or looping throung object
// for in loops and Object.keys

const person = {
    name: "Moiz",
    age: 20,
    hobbies: ["coding", "music", "cubing", "gaming"],
    mobile: 9876543210,
    email: "makdamoiz2002@gmail.com"
}

// iteration with for in loop
console.log("=====================================")

console.log("with only for in loop")

console.log("=====================================")
for (let key in person)
{
    console.log(person[key])
}

// or you can do this also
console.log("=====================================")

console.log("using template string")

console.log("=====================================")

for (let key in person)
{
    console.log(`${key} : ${person[key]}`)
}

// also you can print key value pair without template string like this

console.log("=====================================")

console.log("without template string")

console.log("=====================================")

for (let key in person)
{
    console.log(key ,":", person[key])
}


// you can also use for of loop using object.keys like this 

console.log("=====================================")

console.log("using Object.keys with for of loop")

console.log("=====================================")


for (let key of Object.keys(person))
{
    console.log(person[key])
}