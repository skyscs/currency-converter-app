import React, { act } from 'react';
import { screen } from '@testing-library/react';
import App from '../components/App';
import { renderWithStore } from './store';

test('loader appears at the beginning', () => {
  act(() => {
    const initialState = {
      currencies: {
        currencies: [],
        conversionResult: 0,
        isLoading: true,
      },
    };
    renderWithStore(<App />, initialState);
  });

  expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
});

test('application is loaded', () => {
  act(() => {
    const initialState = {
      currencies: {
        currencies: [],
        conversionResult: 0,
        isLoading: false,
      },
    };
    renderWithStore(<App />, initialState);
  });

  expect(screen.getByTestId('app-header')).toBeInTheDocument();
});
