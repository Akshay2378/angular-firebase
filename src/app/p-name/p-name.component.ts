import { Component, OnInit } from '@angular/core';
import { isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-p-name',
  templateUrl: './p-name.component.html',
  styleUrls: ['./p-name.component.css']
})
export class PNameComponent implements OnInit {
  fname = '';
  buttonDisabe: boolean;
  resetName() {
    this.fname = '';
  }
  bStatus() {
    if (this.fname === '') {
      this.buttonDisabe = true;
      return this.buttonDisabe;
    } else {
      this.buttonDisabe = false;
      return this.buttonDisabe;
    }
  }

  constructor() {

  }

  ngOnInit() {
  }

}
