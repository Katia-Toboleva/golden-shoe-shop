import React from 'react';
import { Button } from '../button';
import { Text } from '../text';
import styles from './styles.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Button>
          <Text text="Log in" />
        </Button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Header;
