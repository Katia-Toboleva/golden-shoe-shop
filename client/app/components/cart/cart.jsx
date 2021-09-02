import React, { useState } from 'react';
import {
  Row, Column, CartItem, Text, CartTotals,
} from '@components';

import { findImage } from '../../utilities/helpers';

import styles from './cart.scss';

const Cart = ({ items, subtotal, onCheckoutButtonClick }) => {
  const [total, setTotal] = useState(subtotal);
  const [discount, setDiscount] = useState();
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [optionSelected, setOptionSelected] = useState();

  const handleApplyPromoClick = (code) => {
    if (code.toLowerCase() === '10off' && !isDiscountApplied) {
      const newTotal = total - 10;
      setIsDiscountApplied(true);
      setDiscount(10);
      setTotal(newTotal);
    }

    if (code.toLowerCase() === '20off' && !isDiscountApplied) {
      const newTotal = total - 20;
      setIsDiscountApplied(true);
      setDiscount(20);
      setTotal(newTotal);
    }
  };

  const handleOptionClick = (option) => {
    setIsDiscountApplied(false);
    setDiscount(0);
    const newTotal = Number(subtotal) + Number(option);
    setOptionSelected(option);
    setTotal(newTotal);
  };

  return (
    <div className={styles['cart']}>
      <Text text="checkout" transform="uppercase" weight="bold" display="block" size="medium" />
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
            total={total}
            isDiscountApplied={isDiscountApplied}
            onOption={handleOptionClick}
            optionSelected={optionSelected}
            onApplyPromoClick={handleApplyPromoClick}
            onCheckoutButtonClick={onCheckoutButtonClick}
          />
        </Column>
      </Row>
    </div>
  );
};

export default Cart;
