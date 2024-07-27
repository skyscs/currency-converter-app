import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from '../reducers';

export const createMockStore = (initialState: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

export const renderWithStore = (ui: React.ReactNode, initialState: Partial<RootState>) => {
  const store = createMockStore(initialState);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};
