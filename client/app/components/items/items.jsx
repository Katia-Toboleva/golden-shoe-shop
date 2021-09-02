import React from 'react';
import { Item } from '@components';
import styles from './items.scss';

const Items = ({ items, onItemClick }) => (
  <div className={styles['items']}>
    {!!items.length && items.map((item) => (
      <Item
        item={item}
        onItemClick={onItemClick}
        disabled={!item.availability.length}
      />
    ))}
  </div>
);

Items.defaultProps = {
  items: [],
};

export default Items;
