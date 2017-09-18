import { Injectable } from '@angular/core';

import { Shape } from '../../model/shape';
import { Rectangle } from '../../model/rectangle';
import { Square } from '../../model/square';
import { Circle } from '../../model/circle';
import { Sheet } from '../../model/sheet';

@Injectable()
export class WeightCalculator {

  densitySheetMap:Map<number, Sheet> = new Map<number, Sheet>();

  constructor() {
    this.loadDensityMap();
  }

  loadDensityMap() {
    let rectangle:Rectangle = new Rectangle();
    rectangle.length = 48;
    rectangle.breadth = 24;

    this.densitySheetMap.set(10, new Sheet(10, 20.4, rectangle));
    this.densitySheetMap.set(11, new Sheet(11, 18.6, rectangle));
    this.densitySheetMap.set(12, new Sheet(12, 16.6, rectangle));
    this.densitySheetMap.set(13, new Sheet(13, 14.7, rectangle));
    this.densitySheetMap.set(14, new Sheet(14, 12.8, rectangle));
    this.densitySheetMap.set(15, new Sheet(15, 11.5, rectangle));
    this.densitySheetMap.set(16, new Sheet(16, 10.0, rectangle));
    this.densitySheetMap.set(17, new Sheet(17, 9.0, rectangle));
    this.densitySheetMap.set(18, new Sheet(18, 8.2, rectangle));
    this.densitySheetMap.set(19, new Sheet(19, 6.4, rectangle));
    this.densitySheetMap.set(20, new Sheet(20, 5.7, rectangle));
    this.densitySheetMap.set(21, new Sheet(21, 5.1, rectangle));
    this.densitySheetMap.set(22, new Sheet(22, 4.4, rectangle));
    this.densitySheetMap.set(23, new Sheet(23, 3.8, rectangle));
    this.densitySheetMap.set(24, new Sheet(24, 3.5, rectangle));
    this.densitySheetMap.set(25, new Sheet(25, 3.2, rectangle));
    this.densitySheetMap.set(26, new Sheet(26, 2.9, rectangle));
    this.densitySheetMap.set(27, new Sheet(27, 2.6, rectangle));
    this.densitySheetMap.set(28, new Sheet(28, 2.4, rectangle));
    this.densitySheetMap.set(29, new Sheet(29, 2.2, rectangle));
    this.densitySheetMap.set(30, new Sheet(30, 2.0, rectangle));
  }

  public calculateWeight(guage:number, shape:Shape):number {
    return this.getDensity(guage)*shape.getArea();
  }

  public getDensity(guage:number):number {
    return this.densitySheetMap.get(guage).getDensity();
  }

}
