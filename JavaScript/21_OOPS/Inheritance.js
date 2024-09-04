class User{
    firstName;
    lastName;
    address;
    dob;
    age;

    constructor(firstName, lastName, address, dob, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.dob = dob;
        this.age = age;
    }

    display(){
        console.log(this.firstName, this.lastName, this.address, this.dob, this.age)
    }
}

class Employee extends User{
    empId;
    role;
    dept;
    mobileNumber;

    constructor(firstName, lastName, address, dob, age, empId, role, dept, mobileNumber){
        super(firstName, lastName, address, dob, age);
        this.empId = empId;
        this.role = role;
        this.dept = dept;
        this.mobileNumber = mobileNumber;
    }

    getEmpData(){
        console.log("Employee Name:",this.firstName, this.lastName)
        console.log("Employee BioData:",this.address, this.dob)
        console.log("Employee Professional Data:",this.empId, this.role)
    }

}

var emp = new Employee("Honnur","Ali","GVT","14-08-1998",26,"NK103","Backend SDE2","IT","8123426862")
console.log("User Details:", emp.display())
console.log("\nUser Employement Details:")
emp.getEmpData()