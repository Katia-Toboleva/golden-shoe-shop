import React, { useState } from 'react';
import { Button, Icon, Text } from '@components';

import styles from './view-item.scss';

const ViewItem = ({ onModalAction, onCloseModalAction, item }) => {
  const [selectedItem, setSelectedItem] = useState({
    color: '',
    size: '',
    quantity: '',
  });

  return (
    <div
      className={styles['view-item']}
      onClick={(e) => e.stopPropagation()}
    >
      <div>{item.name}</div>
      <Button padded theme="black" onClick={() => onModalAction('add-item', selectedItem)}>
        <Text text="Add to bag" transform="uppercase" color="white" />
      </Button>
      <div className={styles['view-item__close-button']}>
        <Button onClick={() => onCloseModalAction('close')}>
          <Icon icon="close" theme="grey" size="x-large" />
        </Button>
      </div>
    </div>
  );
};

export default ViewItem;
