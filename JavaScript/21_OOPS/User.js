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

    setDob(dob){
        this.dob = dob
    }

} 

var user1 = new User("Honnur","Ali","GVT","14-08-1998",26,"8123426862")
user1.display()

user1.setDob("1998-08-14")

user1.display()