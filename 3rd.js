let winnum = 3;
let userguess= +prompt("Guess an number");

if(userguess === winnum)
{
    console.log(`your guess is right the winning number is ${winnum}`);
}
else
{
    if(userguess > winnum)
    {
        console.log(`your guessed number ${userguess} is too high`);
    }
    else{
        console.log(`your guessed number ${userguess} is too low`);
    }
}