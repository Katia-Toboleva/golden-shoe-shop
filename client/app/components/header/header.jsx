import React from 'react';
import Button from '../button';
import Text from '../text';
import Logo from '../logo';
import Icon from '../icon';
import { Row, Column } from '../grid';

import styles from './styles.scss';

const Header = ({
  onCartClick,
  onSearchClick,
  onHomeClick,
  onSignInClick,
}) => {
  return (
    <div className={styles.header}>
      <Row direction="row" alignItems="center" justifyContent="space-between">
        <Column>
          <Button onClick={onSignInClick}>
            <Text text="Sign in" transform="uppercase"/>
          </Button>
        </Column>
        <Column>
          <Button onClick={onHomeClick}>
            <Logo size="small"/>
          </Button>
        </Column>
        <div className={styles.actions}>
          <Row direction="row" alignItems="center" justifyContent="space-between">
            <Column>
              <Button onClick={onSearchClick}>
                <Icon icon="search" theme="grey" size="medium"/>
              </Button>
            </Column>
            <Column>
              <Button onClick={onCartClick}>
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
