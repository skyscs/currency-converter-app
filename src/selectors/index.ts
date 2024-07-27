import { Currency } from '../api/currencies';
import { RootState } from '../reducers';

/**
 * Get loading state
 */
export const getIsLoading: (state: RootState) => boolean = (state: RootState) =>
  state.currencies.isLoading;

/**
 * Get currencies
 */
export const getCurrencies: (state: RootState) => Array<Currency> = (state: RootState) =>
  state.currencies.currencies;

/**
 * Get conversion result
 */
export const getConversionResult: (state: RootState) => number = (state: RootState) =>
  state.currencies.conversionResult;
