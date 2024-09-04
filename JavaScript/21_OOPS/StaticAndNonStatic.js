class User{
    name;  // non-static
    static city; // static

    constructor(name, city){
        this.name = name;
        User.city = city;
    }

    static setCity(city){
        this.city = city;
    }

    display(){
        console.log(this.name, User.city)
    }
}

var user1 = new User("Honnur", "GVT")
user1.display()

var user2 = new User("Bhavana", "Kolar")
user2.display()

User.setCity("Bangalore")
console.log("\n---------------------")
user1.display()
user2.display()