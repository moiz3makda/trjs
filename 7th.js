// about object

const person = {
    name: "Moiz",
    age: 20,
    hobbies: ["cubing", "sleeping", "music", "gaming"]
}

console.log(person);
console.log(person.hobbies[0])
person.gender = "male"
console.log(person);

// also you can use [] this to access the property of the object or to add the property to object example given below

console.log(person["name"]);
person["mobile"] = 9876543210;
console.log(person);

// you can add key rom a variable also like given example below

const key = "email";

person[key] = "makdamoiz2002@gmail.com";

console.log(person);