import React from 'react';
import { Button, Text } from '@components';
import styles from '../categories.scss';

const getInlineStyles = (url) => ({
  background: `url(${url}) center/cover no-repeat`,
  height: '60vh',
  width: '100%',
});

const CategoryMaster = ({
  index,
  url,
  onClick,
}) => (
  <div className={styles.container}>
    <div className={styles[`category category__${index}`]} style={getInlineStyles(url)} />
    <div className={styles.button}>
      <Button
        onClick={onClick}
        theme="white"
        padded
        round={false}
        size="enormous"
      >
        <div className={styles.item}>
          <div className={styles.title}>
            <Text text="new arrivals" transform="uppercase" />
          </div>
          <Text text="shop now" weight="bold" transform="uppercase" />
        </div>
      </Button>
    </div>
  </div>
);

export default CategoryMaster;
