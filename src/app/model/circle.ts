import { Shape } from './shape';

export class Circle extends Shape {

    public diameter:number;

    constructor() {
      super("Circle");
    }

    public getArea(): number {
      return Math.PI * (this.diameter/2) ** 2;
    }

    public getCircumference(): number {
      return 2 * Math.PI * (this.diameter/2);
    }

    public toString(): String {
      return this.name;
    }
}
