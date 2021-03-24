import React, { useMemo } from 'react';

// point contains [lowestBid, lowestSale, highestSale, highestAsk
// they are 100 apart
type Point = number[];
const WIDTH = 40;
const HEIGHT = 300;
const OFFSET = WIDTH * 2;

const makeStick = (point: Point, index: number) => {
    const [bottom, open, close, top] = point;
    return (
        <g key={index} aria-label={`candle number ${index}`}>
            <rect x={WIDTH + index * OFFSET - 1} y={HEIGHT - top} width="2" height={top-bottom} stroke="none" strokeWidth="0" fill="#3366cc"/>
            <rect x={WIDTH/2 + index * OFFSET} y={HEIGHT - open} width={WIDTH} height={Math.abs(close-open)} stroke="#3366cc" strokeWidth="2" fill={close-open > 0 ? "#3366cc" : "#ffffff"}/>
        </g>);

};

// Make SVG Candlestick based upon points passed in.
export const Candlestick = ({points}:{points: Point[]}) => useMemo(
    () => (
        <svg width="900" height="300">
            <rect x="0" y="0" width="900" height="300" stroke="none" strokeWidth="0" fill="#ffffff"></rect>
            {points.map(makeStick)}
        </svg>
    ),
    [points]
);
