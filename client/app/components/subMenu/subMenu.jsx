import React from 'react';
import Text from '../text';
import styles from './styles.scss';

const SubMenu = ({ onFilterClick, items, label }) => (
  <div className={styles.subMenu}>
    {items.map((i) => (
      <div className={styles.item} onClick={() => onFilterClick(i, label)}>
        <Text text={i} transform="capitalize" />
      </div>
    ))}
  </div>
);

export default SubMenu;
