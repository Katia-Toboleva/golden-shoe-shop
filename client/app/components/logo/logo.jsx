import React from 'react';
import logo from './golden_shoe_logo.png';
import styles from './styles.scss';

import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Logo = ({size}) => {
  return (
    <div className={styles.container}>
      <img className={cx('logo', {
        [`logo--size-${size}`]: size,
      })}
      src={logo}
      alt="logo"/>
    </div>
  );
};

export default Logo;
