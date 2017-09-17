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

    this.densitySheetMap.set(10, new Sheet(10, 11.7, rectangle));
    this.densitySheetMap.set(11, new Sheet(11, 11.7, rectangle));
    this.densitySheetMap.set(12, new Sheet(12, 11.7, rectangle));
    this.densitySheetMap.set(13, new Sheet(13, 11.7, rectangle));
    this.densitySheetMap.set(14, new Sheet(14, 11.7, rectangle));
    this.densitySheetMap.set(15, new Sheet(15, 11.7, rectangle));
    this.densitySheetMap.set(16, new Sheet(16, 11.7, rectangle));
    this.densitySheetMap.set(17, new Sheet(17, 11.7, rectangle));
    this.densitySheetMap.set(18, new Sheet(18, 11.7, rectangle));
    this.densitySheetMap.set(19, new Sheet(19, 11.7, rectangle));
    this.densitySheetMap.set(20, new Sheet(20, 11.7, rectangle));
    this.densitySheetMap.set(21, new Sheet(21, 11.7, rectangle));
    this.densitySheetMap.set(22, new Sheet(22, 11.7, rectangle));
    this.densitySheetMap.set(23, new Sheet(23, 11.7, rectangle));
    this.densitySheetMap.set(24, new Sheet(24, 11.7, rectangle));
    this.densitySheetMap.set(25, new Sheet(25, 11.7, rectangle));
    this.densitySheetMap.set(26, new Sheet(26, 11.7, rectangle));
    this.densitySheetMap.set(27, new Sheet(27, 11.7, rectangle));
    this.densitySheetMap.set(28, new Sheet(28, 11.7, rectangle));
    this.densitySheetMap.set(29, new Sheet(29, 11.7, rectangle));
    this.densitySheetMap.set(30, new Sheet(30, 11.7, rectangle));
  }

  public calculateWeight(guage:number, shape:Shape):number {
    return this.getDensity(guage)*shape.getArea();
  }

  public getDensity(guage:number):number {
    return this.densitySheetMap.get(guage).getDensity();
  }

}
