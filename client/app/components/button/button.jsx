import React from 'react';
import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = ({
  onClick,
  size,
  theme,
  children,
  hoverable = false,
  round = true,
  active,
  padded,
}) => (
  <>
    <div
      className={cx('button', {
        [`button--size-${size}`]: size,
        [`button--theme-${theme}`]: theme,
        'hoverable': hoverable && !active,
        round,
        active,
        padded,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  </>
);

export default Button;
