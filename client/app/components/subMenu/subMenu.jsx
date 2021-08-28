import React from 'react';
import Text from '../text';
import styles from './styles.scss';

const SubMenu = ({ onItemClick, items}) => {
  return (
    <div className={styles.subMenu}>
      {items.map((i) => (
        <div className={styles.item}>
          <Text text={i}/>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
