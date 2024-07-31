import React, { useEffect, useMemo, useState } from 'react';
import { Currency } from '../../api/currencies';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import { Box, IconButton, Container, SelectChangeEvent } from '@mui/material';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import { useDispatch, useSelector } from 'react-redux';
import { ActionType } from '../../actions';
import { getConversionResult } from '../../selectors';
import { getCurrencyByShortCode } from '../../utils';
import Amount from '../Amount';
import Output from '../Output/Output';
import { DEFAULT_AMOUNT } from '../../constants';
import History from '../History';

interface CurrencyConverterProps {
  currencies: Currency[];
}

/**
 * Currency converter component
 *
 * @param {Currency[]} currencies - list of available currencies
 * @returns {JSX.Element}
 * @component
 */
const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ currencies }) => {
  const dispatch = useDispatch();
  const convertedResult = useSelector(getConversionResult);

  const [selectedFrom, setSelectedFrom] = useState<string>('');
  const [selectedTo, setSelectedTo] = useState<string>('');
  const [amount, setAmount] = useState<string>(DEFAULT_AMOUNT);

  const handleChangeFrom = (event: SelectChangeEvent<string>) => {
    setSelectedFrom(event.target.value);
  };

  const handleChangeTo = (event: SelectChangeEvent<string>) => {
    setSelectedTo(event.target.value);
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = value
      .replace(/[^0-9.]/g, '') // Remove non-numeric characters
      .replace(/(\..*)\./g, '$1'); // Allow only one decimal point

    setAmount(formattedValue);
  };

  const handleSwapCurrencies = () => {
    setSelectedFrom(selectedTo);
    setSelectedTo(selectedFrom);
  };

  useEffect(() => {
    if (selectedFrom && selectedTo && amount) {
      dispatch({
        type: ActionType.FETCH_CONVERTED_AMOUNT,
        payload: {
          from: selectedFrom,
          to: selectedTo,
          amount: Number(amount),
        },
      });
    }
  }, [dispatch, selectedFrom, selectedTo, amount]);

  const options = useMemo(
    () =>
      currencies.map((currency: Currency) => ({
        value: currency.short_code,
        label: `${currency.short_code} – ${currency.name}`,
      })),
    [currencies],
  );

  const currencyToData: Currency | undefined = useMemo(
    () => getCurrencyByShortCode(currencies, selectedTo),
    [currencies, selectedTo],
  );

  const currencyFromData: Currency | undefined = useMemo(
    () => getCurrencyByShortCode(currencies, selectedFrom),
    [currencies, selectedFrom],
  );

  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" padding={2}>
        <Amount amount={amount} handler={handleChangeAmount} symbol={currencyFromData?.symbol} />
        <CurrencySelector
          label="From"
          value={selectedFrom}
          onChange={handleChangeFrom}
          options={options}
          exclude={selectedTo}
        />
        <IconButton
          color="primary"
          size="large"
          disabled={!(selectedFrom && selectedTo)}
          onClick={handleSwapCurrencies}
        >
          <SwapHorizontalCircleIcon fontSize="inherit" />
        </IconButton>
        <CurrencySelector
          label="To"
          value={selectedTo}
          onChange={handleChangeTo}
          options={options}
          exclude={selectedFrom}
        />
      </Box>
      {!!amount && !!convertedResult && currencyFromData && currencyToData && (
        <Output
          amount={amount}
          convertedResult={convertedResult}
          currencyFromData={currencyFromData}
          currencyToData={currencyToData}
        />
      )}
      <History />
    </Container>
  );
};

export default CurrencyConverter;
