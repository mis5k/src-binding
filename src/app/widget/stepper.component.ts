import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'widget-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  @Input() value:number; 

  @Output() valueChange = new EventEmitter<number>();

  add(num:number) {
    this.value += num
    this.valueChange.emit(this.value);
  }
}
