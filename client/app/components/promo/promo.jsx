import React, { useState } from 'react';
import {
  Row,
  Column,
  Text,
  Button,
} from '@components';

import styles from './promo.scss';

const Promo = ({ onApplyPromoClick }) => {
  const [code, setCode] = useState('');
  return (
    <div className={styles['promo']}>
      <Text text="apply a promo code" transform="capitalize" weight="bold" />
      <div className={styles['promo__field']}>
        <Row alignItems="center">
          <Column grow>
            <input
              className={styles['promo__code']}
              placeholder="Enter promo code"
              onChange={(e) => setCode(e.target.value)}
            />
          </Column>
          <Column shrink>
            <Button theme="grey" padded onClick={() => { onApplyPromoClick(code); }}>
              <Text text="apply" transform="uppercase" color="dark-grey" />
            </Button>
          </Column>
        </Row>
      </div>
    </div>
  );
};

export default Promo;
