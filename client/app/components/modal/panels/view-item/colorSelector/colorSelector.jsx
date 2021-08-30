import React from 'react';
import Text from '../../../../text';
import styles from './styles.scss';

import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const ColorSelector = ({
  colors,
  onColorSelect,
  colorSelected,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text text="Color" weight="bold"/>
        <Text text={colorSelected}/>
      </div>
      <div className={styles.selector}>
        {colors.map((c) => (
          <div
            className={cx('color', {
              'active': colorSelected === c,
              [`color--${c}`]: c,
            })}
            onClick={() => onColorSelect(c)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
