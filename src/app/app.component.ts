import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'eduapp';
  para = true;
  i = 0;
  counter: Array<number> = [];
  toggleParagraph() {
    this.para = !this.para;
    this.counter.push(this.i);
    this.i++;
    return this.para;
  }
  getColor() {
    if (this.counter.length > 4) {
      return 'blue';
    } else {
      return 'green';
    }
  }
}
