import React, { useState} from 'react';
import { Icon, Text } from '@components';
import styles from './styles.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const options = [
  {
    label: 'FREE standard delivery',
    cost: 0,
  },
  {
    label: 'Expres delivery',
    cost: 5.95,
  },
  {
    label: 'Next day delivery',
    cost: 6.95,
  },
];

const DeliveryOptions = ({ onOption, optionSelected }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.dropDown}>
      <div className={styles.button} onClick={() => setOpen(!open)}>
        <Text text="Delivery options" />
        <Icon icon="chevron" theme="black" />
      </div>
      {open && (
        <div className={styles.menu}>
          {options.map((item) => (
            <div className={styles.option} onClick={() => onOption(item.cost)}>
              <div className={cx('checkBox', {
                'active' : optionSelected === item.cost,
              })}>
                {item.cost === optionSelected && (
                  <Icon icon="checkMark" theme="white" />
                )}
              </div>
              <Text text={`£${item.cost}`} />
              <div className={styles.info}>
                <Text text={item.label} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeliveryOptions;
