import api from './api';

/**
 * Currency interface
 *
 * @interface
 */
export interface Currency {
  code: string;
  decimal_mark: string;
  id: number;
  name: string;
  precision: number;
  short_code: string;
  subunit: number;
  symbol: string;
  symbol_first: boolean;
  thousands_separator: string;
}

/**
 * Conversion interface
 *
 * @interface
 */
export interface Conversion {
  value: number;
}

/**
 * Currency list data response interface
 *
 * @interface
 */
interface CurrencyListDataResponse {
  response: Array<Currency>;
}

/**
 * Currencies response interface
 *
 * @interface
 */
export interface CurrenciesResponse {
  data: CurrencyListDataResponse;
}

/**
 * Conversion response interface
 *
 * @interface
 */
export interface ConversionResponse {
  data: Conversion;
}

/**
 * Get currency list
 */
export const getCurrencyList = () => {
  return api.get<Promise<CurrenciesResponse>>('/currencies');
};

/**
 * Get converted amount
 *
 * @param {string} from - From currency code
 * @param {string} to - To currency code
 * @param {number} amount - Amount to convert
 */
export const getConvertedAmount = (from: string, to: string, amount: number) => {
  return api.get<Promise<ConversionResponse>>(`/convert`, {
    params: {
      from,
      to,
      amount,
    },
  });
};
