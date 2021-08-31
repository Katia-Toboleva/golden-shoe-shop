import React, { useState } from 'react';
import {
  Row, Column, CartItem, Text, CartTotals,
} from '@components';

import { findImage, calculateTotal } from '../../utilities/helpers';

import styles from './cart.scss';

const Cart = ({ items, subtotal, onCheckoutButtonClick }) => {
  const [total, setTotal] = useState('');
  const [discount, setDiscount] = useState();
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const handleApplyPromoClick = (code) => {
    const totalAmount = calculateTotal(items);
    if (code.toLowerCase() === '10off') {
      setIsDiscountApplied(true);
      setDiscount(10);
      setTotal(totalAmount - 10);
    }

    if (code.toLowerCase() === '20off') {
      setIsDiscountApplied(true);
      setDiscount(20);
      setTotal(totalAmount - 20);
    }
  };

  return (
    <div className={styles['cart']}>
      <Text text="checkout" transform="uppercase" center weight="bold" display="block" />
      <Row justifyContent="space-between">
        <Column>
          <Row direction="column" space="medium">
            {items.map(item => (
              <Column>
                <CartItem
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  color={item.selectedOptions.color}
                  quantity={item.selectedOptions.quantity}
                  size={item.selectedOptions.size}
                  isItemAvailable={item.isItemAvailable}
                  image={findImage(item.selectedOptions.color, item.images)}
                />
              </Column>
            ))}
          </Row>
        </Column>
        <Column>
          <CartTotals
            subtotal={subtotal}
            tax={0}
            discount={discount}
            total={!total ? subtotal : total}
            isDiscountApplied={isDiscountApplied}
            onApplyPromoClick={handleApplyPromoClick}
            onCheckoutButtonClick={onCheckoutButtonClick}
          />
        </Column>
      </Row>
    </div>
  );
};

export default Cart;
