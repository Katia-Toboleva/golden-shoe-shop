import React from 'react';
import classnames from 'classnames/bind';
import styles from './row.scss';

const cx = classnames.bind(styles);

const Row = ({
  direction,
  children,
  center,
  alignItems,
  justifyContent,
  space,
  wrap,
}) => (
  <div
    className={cx('grid', {
      [`grid--${direction}`]: direction,
      'grid--center': center,
      'grid--wrap': wrap,
      [`grid--align-items-${alignItems}`]: alignItems,
      [`grid--justify-content-${justifyContent}`]: justifyContent,
      [`grid--space-horizontal-${space}`]: space && (direction === 'row' || direction === 'row-reverse'),
      [`grid--space-vertical-${space}`]: space && direction === 'column',
    })}
  >
    {children}
  </div>
);

Row.defaultProps = {
  direction: 'row',
};

export default Row;
