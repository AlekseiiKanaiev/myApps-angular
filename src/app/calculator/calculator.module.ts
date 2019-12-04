import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorComponent } from './components/calculator.component';
import { CalculatorDisplayComponent } from './components/display/display.component';
import { CalculatorKeyboardComponent } from './components/keyboard/keyboard.component';
import { CalculatorNumKeyComponent } from './components/keyboard/nuberKey/numberKey.component';
import { CalculatorSignKeyComponent } from './components/keyboard/signKey/signKey.component';
import { CalculatorKeysComponent } from './components/keyboard/keys/keys.component';


const calculatorRotes: Routes = [
    {path: 'calculator', component: CalculatorComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(calculatorRotes)
    ],
    declarations: [
        CalculatorComponent,
        CalculatorDisplayComponent,
        CalculatorKeyboardComponent,
        CalculatorNumKeyComponent,
        CalculatorSignKeyComponent,
        CalculatorKeysComponent
    ],
    exports: [
        RouterModule,
    ]
})
export class CalculatorModule {}
