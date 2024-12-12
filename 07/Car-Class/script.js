class Car {
    constructor(name, modal, year) {
        this.name = name
        this.modal = modal
        this.year = year
    }

    instanceof() {
        return `This car is ${this.name} ${this.modal} ${this.year}`
    }
}

const car = new Car("Thar", "mahindra", "2024")

console.log(car.instanceof());
