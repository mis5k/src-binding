import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'widget-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  slider = {
    min: '0',
    max: '255',
    step: 'any'
  }

  @Input() value:number; 

  @Output() valueChange = new EventEmitter<number>();

  range_change(num:string) {
    console.log(num);
    this.valueChange.emit(parseInt(num));
  }
}
