import React, { useState } from 'react';
import Text from '../text';
import Icon from '../icon';
import SubMenu from '../subMenu/subMenu';
import styles from './styles.scss';

import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Dropdown = ({ label, items, onItemClick, filterSelected }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cx('container', {
      'no-margin': label === 'sort',
      'active': filterSelected,
    })}>
      <div className={styles.dropdown} onClick={() => setOpen(!open)}>
        <Text text={filterSelected ? filterSelected : label} transform="capitalize"/>
        <div className={styles.icon}>
          <Icon icon="chevron" theme="black"/>
        </div>
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
