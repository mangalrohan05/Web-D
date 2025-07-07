/*Working of objects:

let obj = {
    a: 1,
    b: "Rohan"
};

console.log(obj);

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; //sets rabbit.[[Prototype]] =  animal (inheritance)

*/

class Animal{
    
    constructor(name){
        console.log("Object Created...")
        this.name = name
        console.log("It's an Animal")
    }

    eats(){
        console.log("Eating")
    }

    jumps(){
        console.log("Jumping")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name) // calls the function of parent class
        this.name = name // without super() gives error bcz cannot set name here as it already inherits Animal
        console.log("It's a Lion")
    }

    eats(){
        super.eats()
        console.log("Lion eating!") //Method overloading
    }
}

let a = new Animal("Usogi");
let l = new Lion("Sheru")


console.log(l instanceof Lion) //true
console.log(l instanceof Animal) //true

console.log(a instanceof Animal) //true
console.log(a instanceof Lion) //false
