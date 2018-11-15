class Person {
    constructor(name = 'Anonymous', age =0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi. I am ${this.name}! I am ${this.age} years old.`
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{ 
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }
    
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`
        }
        return description ;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()){
            greeting +=`I'm visitng from ${this.homeLocation}`; 
        }
        return greeting;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }
}
const me = new Student('Romelyn Ungab', 36, 'Information Technology');
console.log(me.getDescription());

const other = new Traveler('Romelyn Ungab', 36, 'Philippines');
console.log(other.getGreeting());

const other1 = new Traveler(undefined, undefined, 'Nowhere');
console.log(other1.getGreeting());

