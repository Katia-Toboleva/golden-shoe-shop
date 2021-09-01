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
  itemsInCart,
}) => {
  return (
    <div className={styles.header}>
      <Row direction="row" alignItems="center" justifyContent="space-between">
        <Column shrink>
          <Button onClick={onSignInClick} border="grey" padded>
            <Text text="Sign in" transform="uppercase" size="semismall" />
          </Button>
        </Column>
        <Column grow>
          <Button onClick={onHomeClick}>
            <Logo size="big"/>
          </Button>
        </Column>
        <Column shrink>
          <div className={styles.actions}>
            <Row direction="row" alignItems="center" space="medium">
              <Column shrink>
                <Button onClick={onSearchClick}>
                  <Icon icon="search" theme="grey" size="large"/>
                </Button>
              </Column>
              <Column grow>
                <Button onClick={onCartClick}>
                  <Icon icon="cart" theme="grey" size="x-large" items={itemsInCart}/>
                </Button>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>
    </div>
  );
};

export default Header;
