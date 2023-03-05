// nested destructuring
const users = [
    { userid: 1, firstname: "Moiz", gender: "male" },
    { userid: 2, firstname: "Aliasgar", gender: "male" },
    { userid: 3, firstname: "Amtulla", gender: "female" }
]

const [user1,user2,user3] = users

console.log(user1)
console.log(user2)
console.log(user3)


const [{firstname:user1firstname},,{gender:user3gender}] = users;

console.log("first name of the user 1 = ",user1firstname);
console.log("gender of the user 3 = ",user3gender)

