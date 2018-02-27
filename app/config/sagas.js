import {takeEvery, select, call, put} from 'redux-saga/effects';
// swap currency
// changing base currency
// initially  getting conversion information 
import { SWAP_CURRENCY, CHANCE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_ERROR, CONVERSION_RESULT } from '../Actions/currencies';

const getLatestRate = (currency) => fetch(`http://api.fixer.io/latest?base=${currency}`)
const fetchLatestConversionRates = function* (action){
    try{
        let currency = action.currency;
        if(currency === undefined){
            currency = yield select((state)=>state.currencies.baseCurrency)
        }
        const response = yield call(getLatestRate, currency);
        const result = yield response.json();
        if(result.error){
            yield put({type: CONVERSION_ERROR, error: result.error})
        } else {
            yield put({type: CONVERSION_RESULT, result})
        }
    }
    catch(e){
        yield put({type: CONVERSION_ERROR, error: e.message})
    }
}
const rootSaga = function* () {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(CHANCE_BASE_CURRENCY, fetchLatestConversionRates);
};
export default rootSaga;