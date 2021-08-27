import React from 'react';
import Icon from '../../../icon';
import { Row } from '../../../grid';
import Button from '../../../button';

import styles from './styles.scss';

const icons = ['faceBook', 'tweeter', 'instagram'];

const Social = ({onSocialMedia}) => {
  return (
    <div className={styles.container}>
      <Row direction="row" justifyContent="space-evenly">
        {icons.map((i) => (
          <Button onClick={() => onSocialMedia(i)}>
            <Icon icon={i} theme="grey" size="medium"/>
          </Button>
        ))}
      </Row>
    </div>
  );
};

export default Social;
