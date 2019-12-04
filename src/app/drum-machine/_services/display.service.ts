import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable()
export class DisplayService {
    private timer;
    private isPower = true;
    public obsMessage: Subject<string> = new Subject<string>();

    constructor(private stateServ: StateService) {
        this.stateServ.obsPower.subscribe(
            (value) => {
                this.isPower = value;
                if (!this.isPower) { this.changeMessage(''); }
            }
        );
    }

    changeMessage(str: string) {
        if (this.timer) { clearTimeout(this.timer); }
        this.obsMessage.next(str);
    }

    setTimer(str: string, time: number) {
        this.timer = setTimeout(this.changeMessage.bind(this), time, str);
    }
}
