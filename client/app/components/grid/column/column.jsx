import React from 'react';
import classnames from 'classnames/bind';

import styles from './Column.module.scss';

const cx = classnames.bind(styles);

const Column = ({
  children, grow, shrink, alignSelf,
}) => (
  <div className={cx('grid-item', {
    'grid-item--grow': grow,
    'grid-item--shrink': shrink,
    [`grid-item--align-self-${alignSelf}`]: alignSelf,
  })}
  >
    {children}
  </div>
);

export default Column;
