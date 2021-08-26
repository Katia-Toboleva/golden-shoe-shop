import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import * as glyphs from './svg';

import styles from './icon.scss';

const cx = classnames.bind(styles);

const Icon = ({
  size,
  icon,
  round,
  theme,
}) => (
  <div
    className={cx('icon', {
      [`icon--size-${size}`]: size,
      'icon--round': round,
      [`icon--theme-${theme}`]: theme,
    })}
  >
    <i dangerouslySetInnerHTML={{ __html: glyphs[icon] }} />
  </div>
);

Icon.propTypes = {
  size: PropTypes.string,
  icon: PropTypes.string,
  round: PropTypes.bool,
  theme: PropTypes.string,
};

Icon.defaultProps = {
  size: 'small',
  theme: 'white',
};

export default Icon;
