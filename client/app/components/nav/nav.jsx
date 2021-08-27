import React from 'react';
import Button from '../button';
import Text from '../text';
import { Row } from '../grid';

import styles from './styles.scss';

const options = ['women', 'men', 'kids', 'accesories'];

const Nav = ({onNavClick}) => {
  return (
    <div className={styles.container}>
      <Row direction="row" alignItems="center" justifyContent="space-evenly">
        {options.map((item) => (
          <Button onClick={onNavClick}>
            <Text text={item} transform="uppercase"/>
          </Button>
        ))}
      </Row>
    </div>
  );
};

export default Nav;
