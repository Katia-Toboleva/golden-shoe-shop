import React from 'react';
import { Button } from '../button';
import styles from './styles.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Button />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Header;