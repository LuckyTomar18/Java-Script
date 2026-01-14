class Person{

    constructor(){
        document.write("<h1>Person Constructor Called</h1>");
    }

     getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }
}