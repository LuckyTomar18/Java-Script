class Shape {

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getBorderWidth() {
        return this.borderWidth;
    }

    setBorderWidth(borderWidth) {
        this.borderWidth = borderWidth;
    }

    area(){
       return 'from shape'
    }

}

module.exports = Shape;