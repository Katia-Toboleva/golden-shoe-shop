import React from 'react';
import classnames from 'classnames/bind';

import styles from './item.scss';

const cx = classnames.bind(styles);

const getInlineStyles = (url) => ({
  background: `url(${url}) center/contain no-repeat`,
});

const Item = ({ item }) => (
  <div className={styles['item']}>
    <div className={styles['item__image']} style={getInlineStyles(item.images[0])} />
    <div>text</div>
  </div>
);

export default Item;
