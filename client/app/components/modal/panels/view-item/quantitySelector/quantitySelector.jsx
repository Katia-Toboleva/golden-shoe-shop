import React from 'react';
import Text from '../../../../text';
import styles from './styles.scss';

const QuantitySelector = ({
  quantity,
  onQuantityChange,
}) => {
  return (
    <div className={styles.container}>
      <Text text="Quantity" weight="bold"/>
      <input onChange={onQuantityChange} value={quantity}/>
    </div>
  );
};

export default QuantitySelector;
