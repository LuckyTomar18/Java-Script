const s = require('./Shape.js')

class Circle extends s {

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius
    }

}

module.exports = Circle;