import React from 'react';
import Text from '../../../../text';
import Button from '../../../../button';
import styles from './styles.scss';

import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const QuantitySelector = ({
  quantity,
  onQuantityChange,
  onMinus,
  onPlus,
  disabled,
}) => {
  return (
    <div className={cx('container', {
      disabled,
    })}>
      <Text text="Quantity" weight="bold"/>
      <div className={styles.buttons}>
        <Button onClick={onMinus}>
          <Text text="-"/>
        </Button>
        <input onChange={onQuantityChange} value={quantity}/>
        <Button onClick={onPlus}>
          <Text text="+"/>
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;
