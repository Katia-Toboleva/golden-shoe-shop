import React from 'react';
import classnames from 'classnames/bind';
import Text from '../../../../text';
import Button from '../../../../button';
import styles from './styles.scss';

const cx = classnames.bind(styles);

const SizeSelector = ({
  sizes,
  onSizeSelect,
  sizeSelected,
  availability,
  onSizeGuide,
}) => {
  const getItemAvaialble = (s) => availability.map((i) => i.size).includes(s);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Text text="Size " weight="bold" />
          <Text text={sizeSelected} />
        </div>
        {onSizeGuide && (
          <Button onClick={onSizeGuide}>
            <Text text="size guide" color="blue" transform="capitalize" />
          </Button>
        )}
      </div>
      <div className={styles.selector}>
        {sizes && sizes.length && sizes.map((s) => (
          <div
            onClick={getItemAvaialble(s) ? () => onSizeSelect(s) : null}
            className={cx('size', {
              active: s === sizeSelected,
              unAvailable: !getItemAvaialble(s),
              pointer: getItemAvaialble(s),
            })}
          >
            <Text text={s} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
