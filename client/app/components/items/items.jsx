import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '@components';
import styles from './items.scss';

const Items = ({ items }) => (
  <div className={styles['items']}>
    {!!items.length && items.map((item) => (
      <Item
        item={item}
      />
    ))}
  </div>
);

Items.defaultProps = {
  items: [],
};

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Items;
