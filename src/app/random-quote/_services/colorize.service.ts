import { COLORS } from '../_data/colorData';
import { Subject } from 'rxjs';

export class ColorizeSerivice {
    obsColor: Subject<string> = new Subject<string>();
    private color: string;
    setRandomColor() {
        console.log(this.color);
        if (this.color === COLORS[Math.floor(Math.random() * COLORS.length)]) {
            console.log(1);
            this.setRandomColor();
        } else {
            this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            this.obsColor.next(this.color);
        }
    }
}
