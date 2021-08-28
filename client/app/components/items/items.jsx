import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../grid';
import styles from './items.scss';

const getInlineStyles = (item) => ({
  backgroundImage: `url(${item.url})`,
});

const Items = ({ items }) => (
  <div className={styles['items']}>
    <div>ITEMS HERE</div>
    {/* <Row wrap spacing="small">
      {items.map((item) => (
        <Column key={item.id} size="4">
          <div className={styles['items__item']} style={getInlineStyles(item)} />
        </Column>
      ))}
    </Row> */}
  </div>
);

Items.defaultProps = {
  items: [],
};

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Items;
