import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

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

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
