//console.log("class.js connected");

class Human {
    newName = "Sazzad";
    constructor() {
        console.log("Human Class");
        this.gender = "Male";
    }

    printGender() {
        console.log("Gender:" + this.gender);

    }
}

class Person extends Human {
    constructor() {
        super();
        console.log("Class.js connectesd: contructor from Person");

        this.name = "Nirjhor";
        this.gender = "None";;
    }

    printName() {
        console.log(this.name + this.newName);

    }


}
const person = new Person();
person.printName();
// person.printGender();