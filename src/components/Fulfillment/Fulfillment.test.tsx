import React from 'react';
import { render, screen } from '@testing-library/react';
import { Fulfillment } from './Fulfillment';

test('renders fulfillmentButton', () => {
  render(<Fulfillment />);
  const fulfillment = screen.getByLabelText(/Fulfillment Options/i);
  expect(fulfillment).toBeInTheDocument();
  const buy = screen.getByRole("button", {name: "buy"});
  expect(buy).toBeInTheDocument();
  expect(buy).toHaveClass('selected');
  expect(screen.getByText(/Place buy Order/i)).toBeInTheDocument();
  const sell = screen.getByRole("button", {name: /sell/i});
  expect(sell).toBeInTheDocument();
});
