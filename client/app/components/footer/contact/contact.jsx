import React from 'react';
import Email from './email';
import Social from './social';

import styles from './styles.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Social />
      <Email />
    </div>

  );
};

export default Contact;
