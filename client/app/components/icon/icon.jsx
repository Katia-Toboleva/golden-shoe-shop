import React from 'react';
import classnames from 'classnames/bind';
import Text from '../text';

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
        <Text text={items} size="semismall" />
      </div>
    )}
  </div>
);

Icon.defaultProps = {
  size: 'small',
  theme: 'white',
};

export default Icon;
