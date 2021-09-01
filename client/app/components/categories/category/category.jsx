import React from 'react';
import { Text } from '@components';
import styles from '../categories.scss';

const getInlineStyles = (url) => ({
  background: `url(${url}) center/cover no-repeat`,
  height: '30vh',
  width: '100%',
});

const Category = ({
  index,
  category,
  url,
  onClick,
}) => (
  <div className={styles.container} onClick={() => onClick(category)}>
    <div className={styles[`category category__${index}`]} style={getInlineStyles(url)} />
    <div className={styles.cat}>
      <Text text={category} transform="uppercase"/>
    </div>
  </div>
);

export default Category;
