import React from 'react';
import classnames from 'classnames/bind';
import Text from '../../../../text';
import styles from './styles.scss';

const cx = classnames.bind(styles);

const ColorSelector = ({
  colors,
  onColorSelect,
  colorSelected,
}) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <Text text="Color" weight="bold" />
      <Text text={colorSelected} transform="capitalize" />
    </div>
    {colors && colors.length && (
    <div className={styles.selector}>
      {colors.map((c) => (
        <div
          className={cx('color', {
            active: colorSelected === c,
            [`color--${c}`]: c,
          })}
          onClick={() => onColorSelect(c)}
        />
      ))}
    </div>
    )}
  </div>
);

export default ColorSelector;
