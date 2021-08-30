import React from 'react';
import {
  Row, Column, CartItem,
} from '@components';

import styles from './cart.scss';

const findImage = (color, images) => images.find(el => el.color === color).urls[0];

const Cart = ({ items }) => (
  <div className={styles['cart']}>
    <Row direction="column" space="medium">
      {items.map(item => (
        <Column>
          <CartItem
            name={item.name}
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
  </div>
);

export default Cart;
