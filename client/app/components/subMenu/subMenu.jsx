import React from 'react';
import Text from '../text';
import styles from './styles.scss';

const SubMenu = ({ onItemClick, items, label}) => {
  return (
    <div className={styles.subMenu}>
      {items.map((i) => (
        <div className={styles.item} onClick={() => onItemClick(i, label)}>
          <Text text={i}/>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;