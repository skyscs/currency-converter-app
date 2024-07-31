import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType, FetchConvertedAmountAction } from '../actions';
import {
  CurrenciesResponse,
  getCurrencyList,
  getConvertedAmount,
  ConversionResponse,
} from '../api/currencies';

/**
 * Fetch currencies
 *
 * @generator
 */
function* fetchCurrencies() {
  try {
    const response: CurrenciesResponse = yield call(getCurrencyList);
    yield put({
      type: ActionType.SET_CURRENCIES,
      payload: { currencies: response.data.response },
    });
  } catch (error) {}
}

/**
 * Fetch converted amount
 *
 * @generator
 * @param {FetchConvertedAmountAction} action
 */
function* fetchConvertedAmount(action: FetchConvertedAmountAction) {
  const { from, to, amount } = action.payload;
  yield put({
    type: ActionType.SET_RESULT,
    payload: { conversionResult: 0 },
  });

  try {
    const response: ConversionResponse = yield call(getConvertedAmount, from, to, amount);
    yield put({
      type: ActionType.SET_RESULT,
      payload: { conversionResult: response.data.value },
    });

    yield put({
      type: ActionType.ADD_HISTORY_ITEM,
      payload: {
        from,
        to,
        amount,
        result: response.data.value,
      },
    });
  } catch (error) {
    // @todo Add error handling
  }
}

/**
 * Currencies saga
 *
 * @generator
 */
const currenciesSaga = () => {
  return all([
    takeLatest(ActionType.FETCH_CURRENCIES, fetchCurrencies),
    takeLatest(ActionType.FETCH_CONVERTED_AMOUNT, fetchConvertedAmount),
  ]);
};

export default currenciesSaga;
