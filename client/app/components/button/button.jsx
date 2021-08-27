import React from 'react';
import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = ({
  onClick,
  size,
  theme,
  children,
}) => (
  <>
    <div
      className={cx('button', {
        [`button--size-${size}`]: size,
        [`button--theme-${theme}`]: theme,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  </>
);

export default Button;
