class animal
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    eat()
    {
        return `${this.name} is eating now`;
    }

    ageof()
    {
        return `age of ${this.name} is ${this.age}`;
    }
}