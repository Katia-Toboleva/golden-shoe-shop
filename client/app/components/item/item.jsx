import React from 'react';
import { Text, Row, Column } from '@components';

import styles from './item.scss';

const getInlineStyles = (url) => ({
  background: `url(${url}) center/contain no-repeat`,
});

const Item = ({ item, onItemClick, disabled }) => (
  <div
    className={styles.item}
    onClick={!disabled ? () => onItemClick(item._id) : null}
  >
    <div className={styles['item__image']} style={getInlineStyles(item.images[0].urls[0])} />
    <Row direction="column" center>
      <Column>
        <Text text={item.name} />
      </Column>
      <Column>
        <Text text={`£ ${item.price}`} size="small" />
      </Column>
    </Row>
    {disabled && (
      <div className={styles.disabled}>
        <div className={styles.message}>
          <Text text="out of stock" size="small" transform="uppercase" />
        </div>
      </div>
    )}
  </div>
);

export default Item;
