import { Shape } from './shape';

export class Sheet {

  constructor(private guage: number, private weight: number, private shape: Shape) {}

  getDensity():number {
    let density:number = this.weight*1000/this.shape.getArea();
    //console.log("Guage: "+this.guage + " , Density: "+density);
    return density;
  }
}
