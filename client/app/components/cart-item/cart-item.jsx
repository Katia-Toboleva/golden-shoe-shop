import React from 'react';
import {
  Row,
  Column,
  Text,
  Image,
  QuantitySelector,
  ColorSelector,
  SizeSelector,
  Button,
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
  price,
}) => (
  <div className={styles['cart-item']}>
    {!isItemAvailable && (
      <div className={styles['cart-item--unavailable']}>
        <div className={styles['cart-item--unavailable__text']}>
          <Text text="Sorry, out of stock" />
        </div>
      </div>
    )}
    <Row>
      <Column>
        <div className={styles['cart-item__image']}>
          <Image src={image} alt={`item-${name}`} />
        </div>
      </Column>
      <Column>
        <div className={styles['cart-item__details']}>
          <Row alignItems="center">
            <Column grow>
              <Text
                text={name}
                transform="uppercase"
                display="block"
                weight="bold"
              />
            </Column>
            <Column shrink>
              <Text
                text={`£ ${price * quantity}`}
                transform="uppercase"
                display="block"
                weight="bold"
                decoration={!isItemAvailable ? 'line-through' : ''}
                color={!isItemAvailable ? 'grey' : 'black'}
                size="small"
              />
            </Column>
          </Row>
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
          {isItemAvailable && (
            <div className={styles['cart-item__button']}>
              <Button>
                <Text text="Remove" color="blue" decoration="underline" />
              </Button>
            </div>
          )}
        </div>
      </Column>
    </Row>
  </div>
);

export default CartItem;
