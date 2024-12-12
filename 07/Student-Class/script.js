class Class {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    information() {
        return `Student Name is ${this.name} and his age is ${this.age}`
    }
}

const Student_info = new Class("Dhruvin", 18)

console.log(Student_info.information());
