import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionType } from '../../actions';
import { getCurrencies, getIsLoading } from '../../selectors';
import { Currency } from '../../api/currencies';
import { Dispatch } from 'redux';
import { Content, Description, Header, Title } from './styles';
import LoadingSpinner from '../LoadingSpinner';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import { Container } from '@mui/material';

/**
 * Main application component
 *
 * @returns {JSX.Element}
 * @component
 */
function App() {
  const dispatch: Dispatch = useDispatch();
  const isLoading: boolean = useSelector(getIsLoading);
  const currencies: Array<Currency> = useSelector(getCurrencies);

  useEffect(() => {
    dispatch({ type: ActionType.FETCH_CURRENCIES });
  }, [dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <Header data-testid="app-header">
        <Title>Currency converter</Title>
        <Description>Easy currency converting</Description>
      </Header>
      <Content>{!isLoading && <CurrencyConverter currencies={currencies} />}</Content>
    </Container>
  );
}

export default App;
