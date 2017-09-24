import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WeightCalculator } from './weight-calc';

import { Shape } from '../../model/shape';
import { Rectangle } from '../../model/rectangle';
import { Square } from '../../model/square';
import { Circle } from '../../model/circle';
import { Oval } from '../../model/oval';
import { LengthScale } from '../../model/length-scale';

@Component({
    selector: 'weight-calculator',
    templateUrl: './weight-calc.component.html'
})

export class WeightCalculatorComponent implements OnInit {

  private weightCalculator: WeightCalculator;

  shapes:Array<Shape> = [new Rectangle(), new Square(), new Circle(), new Oval()];
  guages:Array<number> = [10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  lengthScales:Array<String> = [LengthScale[LengthScale.inches], LengthScale[LengthScale.centimeter],
    LengthScale[LengthScale.millimeter]];

  selectedShape:Shape;
  selectedGuage:number;
  selectedLengthScale:String;

  isCaluculationDone:boolean = false;
  weight:number = 0;
  circumference:number = 0;
  unit:string = "grams";

  constructor(weightCalculator: WeightCalculator) {
    this.weightCalculator = weightCalculator;

    this.selectedShape = new Square();
    this.selectedGuage = 19;
    this.selectedLengthScale = LengthScale[LengthScale.inches];
  }

  ngOnInit() {}

  onSubmit(form){
    // console.log(form.value);
    var ls:LengthScale = LengthScale[this.selectedLengthScale.toString()];
    this.weight = Math.round(this.weightCalculator.calculateWeight(this.selectedGuage,this.selectedShape, ls)*1)/1;
    if(this.weight > 1000) {
      this.weight = this.weight/1000;
      this.unit = "kgs";
    } else{
      this.unit = "grams";
    }
    this.circumference = Math.round((this.selectedShape.getCircumference())*1)/1;

    this.isCaluculationDone = true;
    // console.log("weight = "+this.weightCalculator.calculateWeight(Number(form.value.guage),this.selectedShape, ls));
  }

  hideAlert():void {
    this.isCaluculationDone = false;
  }
}
