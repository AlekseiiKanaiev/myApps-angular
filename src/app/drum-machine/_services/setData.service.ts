import { BehaviorSubject } from 'rxjs';
import data from '../_data/dataSet';
import { BankSet } from '../_models/dataSet.model';


const { bankOne, bankTwo } = data;

export class SetDataService {
    private set = bankOne;
    public obsDataSet: BehaviorSubject<BankSet[]> = new BehaviorSubject(this.set);

    switchData() {
        this.set = (this.set === bankOne) ? bankTwo : bankOne;
        this.obsDataSet.next(this.set);
    }
}
