import { Shape } from './shape';
import { LengthScale } from './length-scale';

export class Sheet {

  constructor(private guage: number, private weight: number, private shape: Shape) {}

  getDensity(lengthScale: LengthScale):number {

    let density:number;
    if(lengthScale == LengthScale.inches){
      density = this.weight*1000/this.shape.getArea();
    } else if(lengthScale == LengthScale.centimeter){
      density = (this.weight*1000/this.shape.getArea())*0.15500;
    } else if(lengthScale == LengthScale.millimeter){
      density = (this.weight*1000/this.shape.getArea())*0.0015500;
    }else {
      density = 0;
    }
    //console.log("Guage: "+this.guage + " , Density: "+density);
    return density;
  }
}
