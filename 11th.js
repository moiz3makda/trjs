// objects inside array

const users = [
    {
        userid: 1,
        firstname: "Moiz",
        gender:"male"
    },
    {
        userid: 2,
        firstname: "Aliasgar",
        gender:"male"
    },
    {
        userid: 3,
        firstname:"Amtulla",
        gender:"female"
    }
]

console.log(users)

for(let user of users){
    console.log(user)
}