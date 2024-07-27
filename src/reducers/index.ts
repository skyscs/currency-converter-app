import { combineReducers, Reducer } from 'redux';
import currenciesReducer, { CurrenciesState } from './currencies';
import { CurrenciesActions } from '../actions';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const rootReducer: Reducer<
  { currencies: CurrenciesState },
  CurrenciesActions,
  Partial<{ currencies: CurrenciesState }>
> = combineReducers({
  currencies: currenciesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
