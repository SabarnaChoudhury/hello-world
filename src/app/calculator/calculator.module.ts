import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorHeadingComponent } from './calculator-heading/calculator-heading.component';
import { CalculatorButtonsComponent } from './calculator-buttons/calculator-buttons.component';



@NgModule({
  declarations: [CalculatorHeadingComponent, CalculatorButtonsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CalculatorHeadingComponent,
    CalculatorButtonsComponent
  ]
})
export class CalculatorModule { }
