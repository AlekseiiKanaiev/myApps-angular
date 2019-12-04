import { Component, Input } from '@angular/core';
import store from './../../../store/store';
import actions from './../../../store/actions';

const NUMBER = actions.NUMBER;

@Component({
    selector: 'app-calculator-numkey-comp',
    templateUrl: './numberKey.component.html',
    styleUrls: ['./numberKey.component.css', '../keyboard.component.css']
})
export class CalculatorNumKeyComponent {
    @Input() key: string;

    click(value: MouseEvent): void {
        console.log(value.toElement.innerHTML);
        store.dispatch({type: NUMBER, value: value.toElement.innerHTML});
    }
}
