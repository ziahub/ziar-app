import { Shape } from './shape';

export class Rectangle extends Shape {

  public length: number;
  public breadth: number;

  constructor() {
    super("Rectangle");
  }

  getArea(): number {
    return this.length*this.breadth;
  }
}
