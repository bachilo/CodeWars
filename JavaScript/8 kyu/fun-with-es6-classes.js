/**
 * Created on Fri Dec 1 14:10:10 2017
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Define a class Person with the following properties: ...
  */

class Person {
    constructor(firstName, lastName, age, gender) {
        firstName !== undefined ? this.firstName = firstName : this.firstName = "John";
        lastName !== undefined ? this.lastName = lastName : this.lastName = "Doe";
        age !== undefined ? this.age = age : this.age = 0;
        gender !== undefined ? this.gender = gender : this.gender = "Male";
    }
    sayFullName() {
        return this.firstName + " " + this.lastName;
    }
    static greetExtraTerrestrials(raceName) {
        return "Welcome to Planet Earth " + raceName;
    }
  }
