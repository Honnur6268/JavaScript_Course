class Employee {
  firstName;
  lLastName;
  mobileNumber;

  constructor(){

  }

  setFirstName(firstName){
    this.firstName = firstName
  }

  setLasttName(lastName){
    this.lastName = lastName
  }

  setMobileNumber(mobileNumber){
    this.mobileNumber = mobileNumber
  }

  display(){
    console.log(this.firstName, this.lastName, this.mobileNumber)
  }
};

export default Employee;
