import { BehaviorSubject } from 'rxjs';


export class CalculatorService {
    private value = '0';
    private result = 0;
    private isDot = false;
    private isEquals = false;
    private isEnd = false;
    private sign: string;

    private obsValue: BehaviorSubject<string> = new BehaviorSubject(this.value);

    getValue(): string {
        return this.obsValue.getValue();
    }

    private changeValue(value: string): void {
        this.value = value;
        this.obsValue.next(this.value);
    }

    takeNum(value: string): void {
        if (!this.isEnd) {
            if (value === '.') {
                if (!this.isDot) {
                    this.isDot = true;
                    if (this.isEquals) {
                        this.isEquals = false;
                        this.changeValue('0.');
                    } else {
                        this.changeValue(this.value + value);
                    }
                }
            } else {
                if (this.isEquals) {
                    this.isEquals = false;
                    this.changeValue(value);
                } else {
                    (this.value === '0') ? this.changeValue(value) : this.changeValue(this.value + value);
                }
            }
        }
    }

    takeSign(value: string) {
        console.log('in serv ' + value);
        console.log(value === '+');
        switch (value) {
            case 'AC':
                this.isEnd = false;
                this.isDot = false;
                this.result = 0;
                this.sign = '';
                this.changeValue('0');
                break;
            case 'C':
                this.isEnd = false;
                this.isDot = false;
                if (this.value === '0') {
                    this.sign = '';
                }
                this.changeValue('0');
                break;
            case '±':
                this.changeValue((parseFloat(this.value) * -1).toString());
                this.isEnd = true;
                break;
            case '%':
                this.isEnd = true;
                this.changeValue((parseFloat(this.value) / 100).toString());
                break;
            case '=':
                this.result = (this.sign && this.sign !== '=') ? this.calculate(parseFloat(this.value)) : parseFloat(this.value);
                // this.result = this.calculate(parseFloat(this.value));
                this.sign = value;
                this.isEnd = false;
                this.isEquals = true;
                this.changeValue((+this.result.toFixed(10)).toString());
                break;
            case '+':
            case '-':
            case '/':
            case '*':
                this.result = this.result ? this.calculate(parseFloat(this.value)) : parseFloat(this.value);
                this.sign = value;
                this.isEnd = false;
                this.isDot = false;
                this.isEquals = false;
                this.changeValue('0');
                console.log('end');
                break;
            default:
                break;
        }
    }

    private calculate(num: number): number {
        switch (this.sign) {
            case '+':
                return this.result + num;
            case '-':
                return this.result - num;
            case '*':
                return this.result * num;
            case '/':
                return this.result / num;
            default:
                return this.result;
        }
    }
}
