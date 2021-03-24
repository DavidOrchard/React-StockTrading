import React from 'react';
// CSS Modules
import styles from './OrderButton.module.css';

export const OrderButton = ({type}:{type:string}) => (
    <button className={`${styles[`fade-in-${type}`]} ${styles[type]}`}>{`Place ${type} order`}</button>
);
