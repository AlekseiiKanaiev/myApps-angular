import { Component, Input } from '@angular/core';
import store from '../../../store/store';
import actions from '../../../store/actions';

const SIGN = actions.SIGN;

@Component({
    selector: 'app-calculator-signkey-comp',
    templateUrl: './signKey.component.html',
    styleUrls: ['./signKey.component.css', '../keyboard.component.css']
})
export class CalculatorSignKeyComponent {
    @Input() key: string;

    click(value: MouseEvent): void {
        console.log(value.toElement.innerHTML);
        store.dispatch({type: SIGN, value: value.toElement.innerHTML});
    }
}
