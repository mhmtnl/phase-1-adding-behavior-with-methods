class Cat {
    constructor(name) { this.name = name; }
    speak() { return `${this.name} says meow!` }
}

class Dog {
    constructor(name) { this.name = name; }
    speak() { return `${this.name} says woof!` }
}

class Bird {
    constructor(name, sex) { this.name = name; this.sex = sex };
    speak() {
        if (this.sex === "female") { return `It's me! ${this.name}, the parrot!`}
        else if (this.sex === "male"){ return `${this.name} says squawk!` };
    }
}
const bird = new Bird("Pablo", "male");
const bird2 = new Bird("Mable", "female");


console.log(bird.speak())
console.log(bird2.speak())
