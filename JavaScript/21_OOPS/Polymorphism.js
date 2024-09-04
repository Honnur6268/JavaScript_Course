// OOPS : Object Oriented Programming System
class User{
    firstName;
    lastName;
    address;
    dob;
    age;
    mobileNumber;

    // Constructor should be named as constructor only
    constructor(firstName, lastName, address, dob, age, mobileNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.dob = dob;
        this.age = age;
        this.mobileNumber = mobileNumber;
    }

    display(){
        console.log(this.firstName, this.lastName, this.address, this.dob, this.age, this.mobileNumber)
    }

}

class Employee extends User{    
    display(){
        super.display()
        console.log(this.firstName, this.lastName)
    }
}

var emp = new Employee("Honnur","Ali","GVT","14-08-1998",26,"8123426862")
emp.display()
