import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text';
import classnames from 'classnames/bind';

import * as glyphs from './svg';

import styles from './icon.scss';

const cx = classnames.bind(styles);

const Icon = ({
  size,
  icon,
  round,
  theme,
  items,
  rotate,
}) => (
  <div
    className={cx('icon', {
      [`icon--size-${size}`]: size,
      'icon--round': round,
      [`icon--theme-${theme}`]: theme,
      [`icon--rotate-${rotate}`]: rotate,
    })}
  >
    <i dangerouslySetInnerHTML={{ __html: glyphs[icon] }} />
    {(icon === 'cart' && !!items) && (
      <div className={styles.count}>
        <Text text={items} size="medium" />
      </div>
    )}
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
