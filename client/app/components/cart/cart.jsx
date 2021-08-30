import React from 'react';

import styles from './cart.scss';

const Cart = ({ children }) => (
  <div className={styles['cart']}>
    {children}
  </div>
);

export default Cart;
