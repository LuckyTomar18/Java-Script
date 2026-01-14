const Shape = require('./Shape')

class Rectangle extends Shape {

    getLenght() {
        return this.lenght;
    }

    setLenght(lenght) {
        this.lenght = lenght;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    area() {
        return this.lenght * this.width
    }

}

module.exports = Rectangle