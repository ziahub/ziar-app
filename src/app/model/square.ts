import { Shape } from './shape';

export class Square extends Shape {
    public side: number;

    constructor() {
        super("Square");
    }

    public getArea(): number {
      return this.side ** 2;
    }

    public getCircumference(): number {
      return 4 * this.side;
    }

    public toString(): String {
      return this.name;
    }
}
