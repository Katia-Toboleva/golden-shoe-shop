import React from 'react';
import Text from '../../../text';
import styles from './styles.scss';

const Email = ({onEmailChange}) => {
  return (
    <div className={styles.container}>
      <input placeholder="enter your email" onChange={onEmailChange}/>
      <Text text="Subscribe" weight="bold" size="small"/>
    </div>
  );
};

export default Email;
