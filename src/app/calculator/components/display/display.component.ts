import { Component, OnInit } from '@angular/core';
import store from '../../store/store';

@Component({
    selector: 'app-calculator-display-comp',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
})
export class CalculatorDisplayComponent implements OnInit {
    value = '0';

    ngOnInit(): void {
        store.subscribe(
            () => this.value = store.getState()
        );
    }
}
