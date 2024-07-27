import { Currency } from '../api/currencies';

/**
 * Format a number with a thousand separator and a decimal mark
 *
 * @param number - The number to format
 * @param thousandSeparator - The thousand separator
 * @param decimalMark - The decimal mark
 * @param decimalPlaces - The number of decimal places
 */
const formatNumber = (
  number: number,
  thousandSeparator: string = ',',
  decimalMark: string = '.',
  decimalPlaces: number = 2,
) => {
  // Ensure the input is a number
  if (isNaN(number)) {
    return null;
  }

  // Convert the number to a fixed decimal places string
  const parts = number.toFixed(decimalPlaces).split('.');

  // Format the integer part with the thousand separator
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);

  // Join the integer part and the fractional part with the decimal mark
  return parts.join(decimalMark);
};

/**
 * Get a formatted currency amount
 *
 * @param amount - The amount to format
 * @param currency - The currency to use for formatting
 */
export const getFormattedCurrencyAmount = (amount: number, currency: Currency): string => {
  const formattedAmount = formatNumber(
    amount,
    currency?.thousands_separator,
    currency?.decimal_mark,
    currency?.precision,
  );

  return `${currency?.symbol_first ? currency?.symbol : ''} ${formattedAmount} ${!currency?.symbol_first ? currency?.symbol : ''}`;
};

export const getCurrencyByShortCode = (
  currencies: Currency[],
  shortCode: string,
): Currency | undefined =>
  currencies.find((currency: Currency) => currency.short_code === shortCode);
