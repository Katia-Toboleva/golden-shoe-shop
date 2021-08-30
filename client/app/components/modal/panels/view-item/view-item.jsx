import React, { useState } from 'react';
import { Button, Icon, Text, Row, Column } from '@components';

import styles from './view-item.scss';

const ViewItem = ({ onModalAction, onCloseModalAction, item }) => {
  // TODO add logic for updating selectedOptions with filters (color, size, quantity).
  // TODO add default values to selectedOptions
  const [selectedOptions, setSelectedOptions] = useState({
    color: '',
    size: '',
    quantity: '',
  });

  // TODO check availability of options for each type of selectedOptions and disable unavailable

  return (
    <div
      className={styles['view-item']}
      onClick={(e) => e.stopPropagation()}
    >
      <Row>
        <Column>
          <div className={styles['view-item__carousel']}>
            carousel here
          </div>
        </Column>

        <Column>
          <Row>
            <Column>
              <Text text={item.name} transform="uppercase" display="block" />
              <Text text={item.description} display="block" />
            </Column>
            <Column>
              <Text text={item.price} display="block" />
            </Column>
          </Row>
          <Button padded theme="black" onClick={() => onModalAction('add-item', {
            item,
            selectedOptions,
          })}
          >
            <Text text="Add to bag" transform="uppercase" color="white" />
          </Button>
        </Column>
      </Row>
      
      <div className={styles['view-item__close-button']}>
        <Button onClick={() => onCloseModalAction('close')}>
          <Icon icon="close" theme="grey" size="x-large" />
        </Button>
      </div>
    </div>
  );
};

export default ViewItem;
