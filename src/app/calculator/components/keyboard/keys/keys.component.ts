import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import store from './../../../store/store';
import actions from './../../../store/actions';

const {NUMBER, SIGN} = actions;

@Component({
    selector: 'app-calculator-keys-comp',
    templateUrl: './keys.component.html',
    styleUrls: ['../keyboard.component.css']
})
export class CalculatorKeysComponent implements OnInit {
    private re = /[0-9\.]/;
    @Input() key: string;
    @Input() isLastInRow: boolean;
    @Input() isFirstRow: boolean;

    // tslint:disable-next-line: no-output-native
    @Output() change = new EventEmitter<boolean>();

    click(event: MouseEvent): void {
        const value = event.toElement.innerHTML.trim();
        if (this.re.test(value)) {
            store.dispatch({type: NUMBER, value});
            this.change.emit(false);
        } else {
            store.dispatch({type: SIGN, value});
            if (value === 'C') {
                this.change.emit(true);
            } else if (value !== 'AC') {
                this.change.emit(false);
            }
        }
    }
    ngOnInit() {
        // console.log(this.isLastInRow);
    }
}
