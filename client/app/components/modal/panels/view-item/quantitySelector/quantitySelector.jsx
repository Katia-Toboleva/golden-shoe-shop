import React from 'react';
import classnames from 'classnames/bind';
import Text from '../../../../text';
import Button from '../../../../button';
import styles from './styles.scss';

const cx = classnames.bind(styles);

const QuantitySelector = ({
  quantity,
  onQuantityChange,
  onMinus,
  onPlus,
  disabled,
}) => (
  <div className={cx('container', {
    disabled,
  })}
  >
    <Text text="Quantity" weight="bold" />
    {onQuantityChange ? (
      <div className={styles.buttons}>
        <Button onClick={onMinus}>
          <Text text="-" />
        </Button>
        <input onChange={onQuantityChange} value={quantity} />
        <Button onClick={onPlus}>
          <Text text="+" />
        </Button>
      </div>
    ) : (
      <Text text={quantity} />
    )}
  </div>
);

export default QuantitySelector;
