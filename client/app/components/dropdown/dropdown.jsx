import React, { useState } from 'react';
import classnames from 'classnames/bind';
import Text from '../text';
import Icon from '../icon';
import SubMenu from '../subMenu/subMenu';
import styles from './styles.scss';

const cx = classnames.bind(styles);

const Dropdown = ({
  label, items, onFilterClick, filterSelected,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cx('container', {
      'no-margin': label === 'sort',
      'container--sort': label === 'sort',
      active: filterSelected,
    })}
    >
      <div className={styles.dropdown} onClick={() => setOpen(!open)}>
        <Text text={filterSelected || label} transform="capitalize" size="semismall" />
        <div className={styles.icon}>
          <Icon icon="chevron" theme="black" />
        </div>
      </div>
      {open && (
        <div onClick={() => setOpen(!open)}>
          <SubMenu items={items} onFilterClick={onFilterClick} label={label} />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
