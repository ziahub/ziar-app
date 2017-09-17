import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WeightCalculator } from './weight-calc';

import { Shape } from '../../model/shape';
import { Rectangle } from '../../model/rectangle';
import { Square } from '../../model/square';
import { Circle } from '../../model/circle';

@Component({
    selector: 'weight-calculator',
    templateUrl: './weight-calc.component.html'
})

export class WeightCalculatorComponent implements OnInit {

  private weightCalculator: WeightCalculator;
  shapes:Array<Shape> = [new Rectangle(), new Square(), new Circle()];

  guages = [10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  selectedShape:Shape = new Square();
  selectedGuage = 19;

  isCaluculationDone:boolean = false;
  weight:number = 0;
  unit:string = "grams";

  constructor(weightCalculator: WeightCalculator) {
    this.weightCalculator = weightCalculator;
  }

  ngOnInit() {}

  onSubmit(form){
    //console.log(form.value);
    this.weight = Math.round(this.weightCalculator.calculateWeight(Number(form.value.guage),this.selectedShape)*1)/1;
    if(this.weight > 1000) {
      this.weight = this.weight/1000;
      this.unit = "kgs";
    } else{
      this.unit = "grams";
    }
    this.isCaluculationDone = true;
    //console.log("weight = "+this.weightCalculator.calculateWeight(Number(form.value.guage),this.selectedShape));
  }

  hideAlert():void {
    this.isCaluculationDone = false;
  }
}
