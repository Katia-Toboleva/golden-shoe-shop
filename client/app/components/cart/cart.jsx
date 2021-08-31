import React, { useEffect, useState } from 'react';
import {
  Row, Column, CartItem, Text, CartTotals,
} from '@components';

import styles from './cart.scss';

const findImage = (color, images) => images.find(el => el.color === color).urls[0];

const calculateSubtotal = (arr) => arr.reduce((acc, currentVal) => acc + (currentVal.price * currentVal.selectedOptions.quantity), 0);

const calculateTotal = (arr, tax) => {
  const subtotal = calculateSubtotal(arr);
  return !tax ? subtotal : (subtotal * tax + subtotal);
};

const Cart = ({ items, subtotal }) => {
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
  };

  console.log(total, 'total');

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
          />
        </Column>
      </Row>
    </div>
  );
};

export default Cart;
