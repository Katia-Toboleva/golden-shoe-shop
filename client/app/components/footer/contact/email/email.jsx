import React from 'react';
import Text from '../../../text';
import styles from './styles.scss';

const Email = ({ onEmailChange }) => (
  <div className={styles.email}>
    <div>
      <Text text="Sign up and get 10% OFF" weight="bold" transform="uppercase" size="semismall" />
    </div>
    <div className={styles.container}>
      <input placeholder="enter your email" onChange={onEmailChange} />
      <Text text="Subscribe" weight="bold" size="semismall" />
    </div>
  </div>
);

export default Email;
