import { Component } from '@angular/core';

@Component({
    selector: 'app-calculator-keyboard-comp',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.css']
})
export class CalculatorKeyboardComponent {
    keys = [['AC', '±', '%', '/'], ['7', '8', '9', '*'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
    isLastInRow = false;
    isFirstRow = false;

    change(isKey: boolean) {
        this.keys[0][0] = isKey ? 'AC' : 'C';
    }
}
