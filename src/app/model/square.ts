import { Shape } from './shape';

export class Square extends Shape {
    public side: number;

    constructor() {
        super("Square");
    }

    getArea(): number {
      return this.side ** 2;
    }
}
