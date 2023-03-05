// function inside function

const app = () => {

    const myfunc = () => {
        console.log("hello from the myfunc");
    }

    const add = (a,b) => {
        return a+b;
    }

    const multiply = (a,b) => {
        return a*b;
    }

    console.log("inside app")
    myfunc();
    console.log(add(3,3));
    console.log(multiply(3,3));
}

app();