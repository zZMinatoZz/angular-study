import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-twoway',
  template: `
  <div>
    <p>Your name: {{name}}</p>
    <input type="text" value="{{inputValue}}" (onChange)="nameChange.emit(this.inputValue)">
  </div>
  `,
  styles: [
    ``
  ]
})
export class TwoWayBindingComponent {
  @Input() name: string = "";
  @Output() nameChange = new EventEmitter<string>();
  inputValue = "";

  changeValue(value: string) {

  }
}