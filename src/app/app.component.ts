declare var require: any
import { Component, SystemJsNgModuleLoader } from '@angular/core';
import { debuglog } from 'util';
import { SwUpdate} from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


update:boolean = false;
  title = 'my-app';
  numbers = ["c", "ce", "del", "+", 7, 8, 9, "-", 4, 5, 6, "*", 1, 2, 3, "/", ".", 0, "=", "%"];
  inputString = '';

  constructor(updates: SwUpdate){
    updates.available.subscribe(event => {
      this.update = true;
    })
  }

  calculate() {
    var stringMath = require('string-math');


    this.inputString = stringMath(this.inputString);
    console.log("calculate");

  }

  clear() {
    this.inputString = "";

  }

  clearAll() {

  }

  public input(input) {

    console.log("click function");

    switch (input) {
      case "c":
        this.clear();
        break;
      case "ce":
        this.clearAll()
        break;
      case "del":
        this.clearAll()
        break;
      case "=":
        this.calculate()
        break;
      default:
        this.inputString += input;
        break;
    }
  }
}
