import React from 'react';
import classnames from 'classnames/bind';
import { Text, Row, Column } from '@components';

import styles from './item.scss';

const cx = classnames.bind(styles);

const getInlineStyles = (url) => ({
  background: `url(${url}) center/contain no-repeat`,
});

const Item = ({ item, onItemClick }) => (
  <div className={styles['item']} onClick={() => onItemClick(item._id)}>
    <div className={styles['item__image']} style={getInlineStyles(item.images[0].urls[0])} />
    <Row direction="column" center>
      <Column>
        <Text text={item.name} />
      </Column>
      <Column>
        <Text text={`£ ${item.price}`} />
      </Column>
    </Row>
  </div>
);

export default Item;
