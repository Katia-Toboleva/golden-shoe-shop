import React from 'react';
import Button from '../button';
import Text from '../text';
import { Row } from '../grid';

import styles from './styles.scss';

const options = ['womens', 'mens', 'kids', 'accesories'];

const Nav = ({ onNavClick, pageActive }) => (
  <div className={styles.container}>
    <Row direction="row" alignItems="center" justifyContent="space-evenly">
      {options.map((item) => (
        <Button
          key={item}
          onClick={() => onNavClick(item)}
          hoverable
          round={false}
          active={pageActive === item}
          padded
        >
          <Text text={item} transform="uppercase" size="semismall" />
        </Button>
      ))}
    </Row>
  </div>
);

export default Nav;
