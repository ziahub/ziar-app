import { Shape } from './shape';

export class Oval extends Shape {

  public length: number;
  public breadth: number;

  constructor() {
    super("Oval");
  }

  public getArea(): number {
    return Math.PI * this.length/2 * this.breadth/2;
  }

  public getCircumference(): number {
    if(this.length > this.breadth){
      return this.calculateCircumference(this.length/2, this.breadth/2);
    } else {
      return this.calculateCircumference(this.breadth/2, this.length/2);
    }
  }

  private calculateCircumference(a:number, b:number): number{
    return Math.PI * (a + b) * (3 * (((a-b)**2)/(((a+b)**2)*Math.sqrt((-3*((a-b)**2)/((a+b)**2))+4)+10)) + 1);
  }

  public toString(): String {
    return this.name;
  }
}
