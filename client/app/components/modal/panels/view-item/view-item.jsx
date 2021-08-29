import React from 'react';

import styles from './view-item.scss';

const ViewItem = (props) => (
  <div className={styles['view-item']}>
    <div>{props.name}</div>
  </div>
);

export default ViewItem;
