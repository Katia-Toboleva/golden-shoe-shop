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
  hoverOpacity = false,
  border,
  round,
  active,
  padded,
  disabled,
}) => (
  <>
    <div
      className={cx('button', {
        [`button--size-${size}`]: size,
        [`button--theme-${theme}`]: theme,
        [`button--border-${border}`]: border,
        'hoverable': hoverable && !active,
        round,
        active,
        padded,
        hoverOpacity,
        disabled,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  </>
);

export default Button;
