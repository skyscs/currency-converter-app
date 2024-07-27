import { ActionType, CurrenciesActions } from '../actions';
import { Currency } from '../api/currencies';

/**
 * Currencies state interface
 *
 * @interface
 */
export interface CurrenciesState {
  currencies: Array<Currency>;
  conversionResult: number;
  isLoading: boolean;
}

/**
 * Currencies reducer initial state
 *
 * @constant
 */
const initialState: CurrenciesState = {
  currencies: [],
  conversionResult: 0,
  isLoading: true,
};

/**
 * Currencies reducer
 *
 * @param {CurrenciesState} state
 * @param {CurrenciesActions} action
 * @returns {CurrenciesState}
 */
export const currenciesReducer: (
  state: CurrenciesState,
  action: CurrenciesActions,
) => CurrenciesState = (
  state: CurrenciesState = initialState,
  action: CurrenciesActions,
): CurrenciesState => {
  switch (action.type) {
    case ActionType.SET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload.currencies,
        isLoading: false,
      };
    case ActionType.SET_RESULT:
      return {
        ...state,
        conversionResult: action.payload.conversionResult,
      };
    default:
      return state;
  }
};

export default currenciesReducer;
