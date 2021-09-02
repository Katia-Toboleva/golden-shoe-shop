import React from 'react';
import classnames from 'classnames/bind';

import styles from './image.scss';

const cx = classnames.bind(styles);

const Image = ({ src, alt, round }) => (
  <img
    className={cx('image', {
      'image--round': round,
    })}
    src={src}
    alt={alt}
  />
);

export default Image;
