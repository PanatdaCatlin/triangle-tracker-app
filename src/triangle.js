// Triangle class
export class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }


    // Helper functions
    checkType() {

        if (this.side1 + this.side2 <= this.side3 || this.side1 + this.side3 <= this.side2 || this.side2 + this.side3 <= this.side1) {
            return "Not a Triangle";
        } else if (this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3) {
            return "Scalene Triangle";
        } else if (this.side1 === this.side2 && this.side1 === this.side3) {
            return "Equilateral Triangle";
        } else if (this.side1 === this.side2 && this.side2 !== this.side3 || this.side1 === this.side3 && this.side1 !== this.side2 || this.side3 === this.side2 && this.side3 !== this.side1) {
            return "Isosceles Triangle";
        }
    }
}