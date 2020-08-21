import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-twoway',
  template: `
  <div>
    <p>Your name: {{name}}</p>
    <input type="text" (onChange)="nameChange.emit(this.name)">
  </div>
  `,
  styles: [
    ``
  ]
})
export class TwoWayBindingComponent {
  @Input() name: string = "";
  @Output() nameChange = new EventEmitter<string>();
}