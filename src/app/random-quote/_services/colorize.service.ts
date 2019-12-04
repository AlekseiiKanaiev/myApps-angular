import { COLORS } from '../_data/colorData';
import { Subject } from 'rxjs';

export class ColorizeSerivice {
    obsColor: Subject<string> = new Subject<string>();
    private color: string;
    setRandomColor() {
        if (this.color === COLORS[Math.floor(Math.random() * COLORS.length)]) {
            this.setRandomColor();
        } else {
            this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            this.obsColor.next(this.color);
        }
    }
}
