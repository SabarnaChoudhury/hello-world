import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.css']
})
export class CalculatorButtonsComponent implements OnInit {
  num1=0;
  num2=0;
  constructor() { }

  ngOnInit(): void {
  }
  
  add=(a,b)=>document.querySelector("#result").innerHTML=(parseInt(a)+parseInt(b)).toString();
  sub=(a,b)=>document.querySelector("#result").innerHTML=(parseInt(a)-parseInt(b)).toString();
  mul=(a,b)=>document.querySelector("#result").innerHTML=(parseInt(a)*parseInt(b)).toString();
  div=(a,b)=>(parseInt(b)!=0)?document.querySelector("#result").innerHTML=(parseInt(a)/parseInt(b)).toString():alert("Hey!! You can't use 0 as divisor");
  
 
}
