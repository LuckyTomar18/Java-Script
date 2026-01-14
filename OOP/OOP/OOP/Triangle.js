const Shape = require('./Shape')

class Triangle extends Shape {

    getBase() {
        return this.getBase
    }
    setBase(base) {
        this.base = base;
    }

    getHeight() {
        return this.getHeight
    }
    setHeight(height) {
        this.height = this.height;
    }

    area() {
        return (this.base * this.height) / 2
    }
}