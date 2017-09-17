import { Shape } from './shape';

export class Circle extends Shape {

    public radius:number = 0;

    constructor() {
      super("Circle");
    }

    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
}
