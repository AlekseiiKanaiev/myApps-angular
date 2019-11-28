import actions from './actions';
import { CalculatorService } from '../_services/calculator.service';

const {NUMBER, SIGN} = actions;
const calcServ = new CalculatorService();

function reducer (store = '0', action) {
    const tmp = store;
    switch (action.type) {
        case NUMBER:
            calcServ.takeNum(action.value);
            return calcServ.getValue();
        case SIGN:
            calcServ.takeSign(action.value);
            return calcServ.getValue();
        default:
            return store;
    }
}

export default reducer;
