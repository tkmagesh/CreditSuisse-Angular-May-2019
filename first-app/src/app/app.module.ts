import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorTwoComponent } from './calculator/calculatorTwo.component';
import { CalculatorModel } from './calculator/calculatorModel';
import { CalculatorResultComponent } from './calculator/calculatorResult.component';

import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent
    , CalculatorComponent
    , CalculatorTwoComponent
    , CalculatorResultComponent
    , ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ CalculatorModel ],
  bootstrap: [AppComponent]
})
export class AppModule { }
