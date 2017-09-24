import { Shape } from './shape';

export class Rectangle extends Shape {

  public length: number;
  public breadth: number;

  constructor() {
    super("Rectangle");
  }

  public getArea(): number {
    return this.length*this.breadth;
  }

  public getCircumference(): number {
    return (2 * this.length) + (2 * this.breadth);
  }

  public toString(): String {
    return this.name;
  }
}
