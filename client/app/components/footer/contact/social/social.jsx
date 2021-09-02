import React from 'react';
import {
  Icon,
  Row,
  Button,
} from '@components';

import styles from './styles.scss';

const icons = ['faceBook', 'tweeter', 'instagram'];

const Social = ({ onSocialMedia }) => (
  <div className={styles.container}>
    <Row direction="row" justifyContent="space-evenly">
      {icons.map((i) => (
        <Button onClick={() => onSocialMedia(i)} key={`item-${i}`}>
          <Icon icon={i} theme="grey" size="medium" />
        </Button>
      ))}
    </Row>
  </div>
);

export default Social;
