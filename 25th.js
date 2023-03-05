// find method
// it also gets call-back function as an input
// it only shows the first occurance of the value in the array
// just like bellow example there are 2 elements whichs length is 3 but it will only show you a cat and then it stops if there is no element which setisfy the condition then it will show undefined




// const myarray = ['hello','cat','dog','lion'];

// function islength(string)
// {
//     return string.length === 3;
// }


// const ans = myarray.find(islength)
// console.log(ans)


// const ans = islength('dog');

// console.log(ans)



const users = [
    {userid:1, username:"amtulla"},
    {userid:2, username:"aliasgar"},
    {userid:3, username:"moiz"},
    {userid:4, username:"fatema"},
]

function finduser(users)
{
    return users.userid===3;
}

const user = users.find(finduser);

console.log(user)