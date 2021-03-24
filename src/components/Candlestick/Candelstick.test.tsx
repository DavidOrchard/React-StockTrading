import React from 'react';
import { render, screen } from '@testing-library/react';
import { Candlestick } from './Candlestick';

test('renders Candlestick', () => {
  render(<Candlestick points={[[185, 218, 232, 260]]}/>);
  const candlestick = screen.getByLabelText(/candle number 0/i);
  expect(candlestick).toMatchSnapshot();
});