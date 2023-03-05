// call, apply and bind methods

// call is used when the function is in the another object or outside the object just like shown below
// apply is same as the call but the difference is that when you use apply you can send the argument by making array like shown in the example
// bind is also same as the call and apply but it returns the value in the function and you can print it using function just like shown in the example


function about (hobby,favmusic){
    console.log(this.fisrtname,this.age,hobby,favmusic)
}

const user1 = {
    fisrtname: "moiz",
    age : 20,
}

const user2 = {
    fisrtname: "ali asgar",
    age : 23
}


// about.call(user1,'playing games','monody by thefatrat')
// about.apply(user2,['playing games','monody by thefatrat'])

const func = about.bind(user1,'playing games','monody by thefatrat')
func()