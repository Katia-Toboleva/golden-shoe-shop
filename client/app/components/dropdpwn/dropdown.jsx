import React, { useState } from 'react';
import Text from '../text';
import Icon from '../icon';
import SubMenu from '../subMenu/subMenu';
import styles from './styles.scss';

const Dropdown = ({ label, items, onItemClick, filterSelected }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.dropdown} onClick={() => setOpen(!open)}>
        <Text text={filterSelected ? filterSelected : label} />
        <Icon icon="chevron" theme="black"/>
      </div>
      {open && (
        <div onClick={() => setOpen(!open)}>
          <SubMenu items={items} onItemClick={onItemClick} label={label}/>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
