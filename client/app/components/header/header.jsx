import React from 'react';
import Button from '../button';
import Text from '../text';
import Logo from '../logo';
import Icon from '../icon';
import { Row, Column } from '../grid';

import styles from './styles.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Row direction="row" alignItems="center" justifyContent="space-between">
        <Column>
          <Button>
            <Text text="Sign in" />
          </Button>
        </Column>
        <Column>
          <Logo size="small"/>
        </Column>
        <div className={styles.actions}>
          <Row direction="row" alignItems="center" justifyContent="space-between">
            <Column>
              <Button>
                <Icon icon="search" theme="grey" size="medium"/>
              </Button>
            </Column>
            <Column>
              <Button>
                <Icon icon="cart" theme="grey" size="medium"/>
              </Button>
            </Column>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default Header;
