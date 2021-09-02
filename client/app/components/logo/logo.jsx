import React from 'react';
import classnames from 'classnames/bind';
import logo from './golden_shoe_logo.png';
import styles from './styles.scss';

const cx = classnames.bind(styles);

const Logo = ({ size }) => (
  <div className={styles.container}>
    <img
      className={cx('logo', {
        [`logo--size-${size}`]: size,
      })}
      src={logo}
      alt="logo"
    />
  </div>
);

export default Logo;
