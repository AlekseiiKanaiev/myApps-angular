import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class StateService {

    public obsVolume: BehaviorSubject<number> = new BehaviorSubject(0.3);
    public obsPower: BehaviorSubject<boolean> = new BehaviorSubject(true);

    switchPower() {
        this.obsPower.next(!this.obsPower.getValue());
    }

    setVolume(value: number) {
        this.obsVolume.next(value);
    }
}
