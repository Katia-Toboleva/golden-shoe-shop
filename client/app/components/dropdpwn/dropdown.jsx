import React, { useState } from 'react';
import Text from '../text';
import Icon from '../icon';
import styles from './styles.scss';

const Dropdown = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.dropdown} onClick={() => setOpen(!open)}>
        <Text text={label} />
        <Icon icon="chevron" theme="black"/>
      </div>
      {open && (
        children
      )}
    </>
  );
};

export default Dropdown;
