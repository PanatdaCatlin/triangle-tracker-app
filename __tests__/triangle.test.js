import { Triangle } from './../src/triangle';

describe('Triangle', () => {
    test('should correctly create a triangle object with three lenghts', () => {
        var triangle = new Triangle(2,4,5);
        expect(triangle.side1).toEqual(2);
        expect(triangle.side2).toEqual(4);
        expect(triangle.side3).toEqual(5);
    });
    test('should correctly determine wheather three lengths are not a triangle', () => {
        var notTriangle = new Triangle(3,9,22);
        expect(notTriangle.checkType()).toEqual('Not a Triangle');
    });
    test('should correctly determine whether three lenghts makes a scalene triangle', ()=> {
        var scaleneTriangle = new Triangle(4,5,7);
        expect(scaleneTriangle.checkType()).toEqual('Scalene Triangle');
    });
    test('should correctly determind wheater three lenghts make an isosceles triangle', () => {
        var isoscelesTriangle = new Triangle(5,5,7);
        expect(isoscelesTriangle.checkType()).toEqual('Isosceles Triangle');
    });
    test('should correctly determind wheater three lenghts make an equilateral triangle', () => {
        var equilateralTriangle = new Triangle(5,5,5);
        expect(equilateralTriangle.checkType()).toEqual('Equilateral Triangle');
    })
});