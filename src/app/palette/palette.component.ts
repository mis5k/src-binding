import { Component } from '@angular/core';

@Component({
  selector: 'palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent {
  channels:[number] = [128, 128, 128];
  backgroundColor:string = 'rgb(128,128,128)';

  onColorChange(idx:number, value:number) {
   // console.log(idx + " | "+ value)
    this.channels[idx] = value;
    this.backgroundColor = `rgb(${this.channels[0]}, ${this.channels[1]}, ${this.channels[2]})`;
  }
}
