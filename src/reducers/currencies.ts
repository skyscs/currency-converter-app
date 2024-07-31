import { ActionType, CurrenciesActions } from '../actions';
import { Currency } from '../api/currencies';
import { HISTORY_LIMIT } from '../constants';

export interface HistoryItem {
  from: string;
  to: string;
  amount: number;
  result: number;
}

/**
 * Currencies state interface
 *
 * @interface
 */
export interface CurrenciesState {
  currencies: Array<Currency>;
  conversionResult: number;
  isLoading: boolean;
  history: Array<HistoryItem>;
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
  history: [],
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
    case ActionType.ADD_HISTORY_ITEM:
      const updatedHistory = [
        {
          from: action.payload.from,
          to: action.payload.to,
          amount: action.payload.amount,
          result: action.payload.result,
        },
        ...state.history,
      ];

      if (updatedHistory.length > HISTORY_LIMIT) {
        updatedHistory.pop();
      }

      return {
        ...state,
        history: [...updatedHistory],
      };
    default:
      return state;
  }
};

export default currenciesReducer;
