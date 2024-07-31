import { Currency } from '../api/currencies';
import { HistoryItem } from '../reducers/currencies';

export enum ActionType {
  FETCH_CURRENCIES = 'FETCH_CURRENCIES',
  SET_CURRENCIES = 'SET_CURRENCIES',
  FETCH_CONVERTED_AMOUNT = 'FETCH_CONVERTED_AMOUNT',
  SET_RESULT = 'SET_RESULT',
  ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM',
}

export interface ConversionPayload {
  from: string;
  to: string;
  amount: number;
}

export interface FetchConvertedAmountAction {
  type: ActionType.FETCH_CONVERTED_AMOUNT;
  payload: ConversionPayload;
}

interface FetchCurrenciesAction {
  type: ActionType.FETCH_CURRENCIES;
}

interface SetCurrenciesAction {
  type: ActionType.SET_CURRENCIES;
  payload: {
    currencies: Array<Currency>;
  };
}

interface SetResultAction {
  type: ActionType.SET_RESULT;
  payload: {
    conversionResult: number;
  };
}

interface AddHistoryItemAction {
  type: ActionType.ADD_HISTORY_ITEM;
  payload: HistoryItem;
}

export type CurrenciesActions =
  | FetchCurrenciesAction
  | SetCurrenciesAction
  | FetchConvertedAmountAction
  | SetResultAction
  | AddHistoryItemAction;
