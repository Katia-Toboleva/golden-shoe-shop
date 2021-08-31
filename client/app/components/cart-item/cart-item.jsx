import React from 'react';
import {
  Row, Column, Text, Image, QuantitySelector, ColorSelector, SizeSelector,
} from '@components';

import styles from './cart-item.scss';

const CartItem = ({
  name,
  description,
  color,
  quantity,
  size,
  isItemAvailable,
  image,
 }) => (
  <div className={styles['cart-item']}>
    <Row >
      <Column>
        <div className={styles['cart-item__image']}>
          <Image src={image} alt={`item-${name}`} />
        </div>
      </Column>
      <Column>
        <div className={styles['cart-item__details']}>
          <Text text={name} transform="uppercase" display="block" />
          <Text text={description} display="block" />
          <SizeSelector
            sizeSelected={size}
          />
          <ColorSelector
            colorSelected={color}
          />
          <QuantitySelector
            quantity={quantity}
          />
        </div>
      </Column>
    </Row>
  </div>
);

export default CartItem;
