import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { getFormattedCurrencyAmount } from '../../utils';
import { Currency } from '../../api/currencies';

/**
 * Output component props
 *
 * @interface
 */
interface OutputProps {
  amount: string;
  convertedResult: number;
  currencyFromData: Currency;
  currencyToData: Currency;
}

/**
 * Output component props
 *
 * @type OutputProps
 * @component
 */
const Output: React.FC<OutputProps> = ({
  amount,
  convertedResult,
  currencyFromData,
  currencyToData,
}) => {
  const amountToDisplay = useMemo(() => {
    if (currencyFromData) {
      return getFormattedCurrencyAmount(Number(amount), currencyFromData);
    }
    return '';
  }, [amount, currencyFromData]);

  const convertedAmountToDisplay = useMemo(() => {
    if (convertedResult && currencyToData) {
      return getFormattedCurrencyAmount(convertedResult, currencyToData);
    }
    return '';
  }, [convertedResult, currencyToData]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding={10}
    >
      <Typography variant="h6" gutterBottom>
        {amountToDisplay} &asymp;
      </Typography>
      <Typography variant="h1" gutterBottom>
        {convertedAmountToDisplay}
      </Typography>
    </Box>
  );
};

export default Output;
