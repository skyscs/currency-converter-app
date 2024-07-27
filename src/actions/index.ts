import { Currency } from '../api/currencies';

export enum ActionType {
  FETCH_CURRENCIES = 'FETCH_CURRENCIES',
  SET_CURRENCIES = 'SET_CURRENCIES',
  FETCH_CONVERTED_AMOUNT = 'FETCH_CONVERTED_AMOUNT',
  SET_RESULT = 'SET_RESULT',
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

export type CurrenciesActions =
  | FetchCurrenciesAction
  | SetCurrenciesAction
  | FetchConvertedAmountAction
  | SetResultAction;
