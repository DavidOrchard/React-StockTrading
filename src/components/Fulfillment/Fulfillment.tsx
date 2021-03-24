import React, { useState } from 'react';
// Regular CSS, not CSS Modules
import './Fulfillment.css';
import { OrderButton } from '../OrderButton';
import { Candlestick } from '../Candlestick';

const points = [[185, 218, 232, 260], [130, 190, 150, 200]];

export const Fulfillment = () => {

  const [selectedFulfillment, setSelectedFulfillment] = useState("buy");
  const toggleState = () => 
    setSelectedFulfillment(selectedFulfillment === "buy" ? "sell" : "buy")

  const classes = (fulfillment: string) =>
    `button ${fulfillment}Button ${selectedFulfillment === fulfillment ? 'selected': '' }`;

    return (
    <div className="fulfillmentContainer">
      <Candlestick points={points} />
      <div className="fulfillmentOptions" aria-label="Fulfillment Options">
        <button className={classes('buy')} onClick={toggleState}>buy</button>
        <button className={classes('sell')} onClick={toggleState}>sell</button>
      </div>
      <OrderButton type={selectedFulfillment}/>
    </div>
    );
}