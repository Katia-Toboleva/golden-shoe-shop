import React from 'react';
import {
  Row,
  Column,
  Text,
  Promo,
  Button,
  DeliveryOptions,
} from '@components';

import styles from './cart-totals.scss';

const CartTotals = ({
  subtotal,
  tax,
  total,
  discount,
  onApplyPromoClick,
  isDiscountApplied,
  onCheckoutButtonClick,
  onOption,
  optionSelected,
}) => (
  <div className={styles['cart-totals']}>
    <div className={styles['cart-totals__item']}>
      <Row justifyContent="space-between">
        <Column>
          <Text
            text="subtotal"
            transform="capitalize"
            size="small"
          />
        </Column>
        <Column>
          <Text
            text={`£ ${subtotal}`}
            size="small"
          />
        </Column>
      </Row>
    </div>

    <div className={styles['cart-totals__item']}>
      <Row justifyContent="space-between">
        <Column>
          <Text
            text="sales tax"
            transform="capitalize"
            size="small"
          />
        </Column>
        <Column>
          <Text
            text={`£ ${tax}`}
            size="small"
          />
        </Column>
      </Row>
    </div>

    <div className={styles['cart-totals__item']}>
      <DeliveryOptions
        onOption={onOption}
        optionSelected={optionSelected}
      />
    </div>
    {isDiscountApplied && (
      <div className={styles['cart-totals__item']}>
        <Row justifyContent="space-between">
          <Column shrink>
            <Text
              text="discount"
              transform="capitalize"
              size="small"
              weight="bold"
            />
          </Column>
          <Column grow>
            <Text
              text={`£ -${discount}`}
              transform="uppercase"
              size="small"
            />
          </Column>
        </Row>
      </div>
    )}
    <div className={styles['cart-totals__item']}>
      <Row justifyContent="space-between">
        <Column>
          <Text
            text="total"
            transform="uppercase"
            size="medium"
            weight="bold"
          />
        </Column>
        <Column>
          <Text
            text={`£ ${total}`}
            transform="uppercase"
            size="small"
          />
        </Column>
      </Row>
    </div>

    <Promo
      onApplyPromoClick={onApplyPromoClick}
    />

    <Button
      theme="black"
      padded
      onCheckoutClick={onCheckoutButtonClick}
    >
      <Text
        color="white"
        text="checkout now"
        transform="uppercase"
        size="semismall"
      />
    </Button>
  </div>
);

export default CartTotals;
